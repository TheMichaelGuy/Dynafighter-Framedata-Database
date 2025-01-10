var app = angular.module('BattleApp', []);

app.controller('BattleController', function($scope, $http) {
  // Extract character name from URL using plain JavaScript
  var path = window.location.pathname;
  var segments = path.split('/');
  var characterName = segments.pop();
  var pageType = segments.pop();

  // Choose Stats
  var attackDataEndpoint = (pageType === 'battle-calculator-ruby') ? '/api/attack-data-ruby/' : '/api/attack-data/';
  var followupDataEndpoint = (pageType === 'battle-calculator-ruby') ? '/api/followup-data-ruby/' : '/api/followup-data/';

  $scope.characterName = characterName;
  $scope.pageType = pageType;
  
  // Initialize variables
  $scope.selectedMove = null;
  $scope.selectedMoveF = null;

  $scope.xpos = 0;
  $scope.ypos = -87;
  $scope.scaleBK = 1;
  $scope.scaleRK = 1;
  $scope.scaleBH = 1;
  $scope.scaleRH = 1;
  $scope.scaleDMG = 1;
  $scope.LoR = 1;
  $scope.EoL = 1;
  $scope.blastzone = 0;
  $scope.targetPercent = 100;

  $scope.groundLine = -100; //must adjust to canvas
  $scope.groundWidth = 250; //estimation based on Green Castle
  $scope.groundDepth = 35; //estimation based on Green Castle

  $scope.hitboxWidth = 11; //character size already factored
  $scope.hitboxHeight = 25.5; //character size already factored

  $scope.initialXv = 0;
  $scope.initialYv = 0;

  $scope.line1 = "";
  $scope.line2 = "";
  $scope.line3 = "";
  $scope.line4 = "";

  $scope.bzx = 360;
  $scope.bzy = 270;

  // Fetch battle data for the character
  $http.get(attackDataEndpoint + characterName)
    .then(function(response) {
      console.log('Battle data fetched:', response.data); // Log the data
      $scope.attackData = response.data;
    }, function(error) {
      console.error('Error fetching battle data:', error);
    });

  $http.get(followupDataEndpoint + characterName)
    .then(function(response) {
      console.log('followup data fetched:', response.data); // Log the data
      $scope.followupData = response.data;
    }, function(error) {
      console.error('Error fetching followup data:', error);
    });

  $scope.resetScales = function() {
    $scope.selectedMove = null;
    $scope.selectedMoveF = null;

    $scope.xpos = 0;
    $scope.ypos = -87;
    $scope.scaleBK = 1;
    $scope.scaleRK = 1;
    $scope.scaleBH = 1;
    $scope.scaleRH = 1;
    $scope.scaleDMG = 1;
    $scope.LoR = 1;
    $scope.EoL = 1;
    $scope.blastzone = 0;
    $scope.targetPercent = 100;
  
    $scope.groundLine = -100; //must adjust to canvas
    $scope.groundWidth = 250; //estimation based on Green Castle
    $scope.groundDepth = 35; //estimation based on Green Castle
  
    $scope.hitboxWidth = 11; //character size already factored
    $scope.hitboxHeight = 25.5; //character size already factored
  
    $scope.initialXv = 0;
    $scope.initialYv = 0;
  
    $scope.line1 = "";
    $scope.line2 = "";
    $scope.line3 = "";
    $scope.line4 = "";
  
    $scope.bzx = 360;
    $scope.bzy = 270;
  };

  $scope.mirrorPositioning = function () {
    $scope.xpos *= -1;
    $scope.initialXv *= -1;
    if ($scope.LoR)
    {
      $scope.LoR = 0;
    }
    else
    {
      $scope.LoR = 1;
    }
  }

  $scope.graphKnockback = function() {
    $scope.line1 = "";
    $scope.line2 = "";
    $scope.line3 = "";
    $scope.line4 = "";
    if ($scope.selectedMove) {
        //console.log("Move Data:", $scope.selectedMove);
        var canvas = document.getElementById('battleCanvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var background = document.getElementById('background');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height); // Draw the background image

        var img = new Image();
        if ($scope.selectedMove.IconicFrame)
        {
          img.src = '/images/animationframes/' + $scope.characterName + '/' + $scope.selectedMove.AttackName + $scope.selectedMove.IconicFrame + '.svg';
          img.onload = function()
          { // Draw the image at half its size
            var imgWidth = img.width / 2;
            var imgHeight = img.height / 2;
            ctx.drawImage(img, $scope.xpos + 320 - (0.5 * imgWidth), -$scope.ypos + 180 - (0.5 * imgHeight), imgWidth, imgHeight);
           };
        }

        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;

        for (let l = 1; l <= 3; ++l) {
            var targetXv = (($scope.scaleBK * 1.41421356237 * $scope.selectedMove.BK) + (($scope.targetPercent + ($scope.selectedMove.DMG * $scope.scaleDMG)) * $scope.scaleRK * 0.02 * $scope.selectedMove.RK)) * (Math.cos($scope.selectedMove.AK * Math.PI / 180));
            var targetYv = 2 * (($scope.scaleBK * 1.41421356237 * $scope.selectedMove.BK) + (($scope.targetPercent + ($scope.selectedMove.DMG * $scope.scaleDMG)) * $scope.scaleRK * 0.02 * $scope.selectedMove.RK)) * (Math.sin($scope.selectedMove.AK * Math.PI / 180));
            var targetHitstun = Math.ceil(($scope.scaleBH * 2.4 * $scope.selectedMove.BH) + (($scope.targetPercent + ($scope.selectedMove.DMG * $scope.scaleDMG)) * $scope.scaleRH * .008 * $scope.selectedMove.RH * $scope.selectedMove.RH)) - 2;
            var targetXpos = $scope.xpos + 320;
            var targetYpos = -$scope.ypos + 180;
            var targetDrift = .55 * 1 * .05;
            var top = 180 - $scope.groundLine;//180 is 1/2 the canvas height
            var bottom = top + $scope.groundDepth;
            var KOs = false;

            if (!$scope.LoR) {
                targetXv *= -1;
            }
            if (l == 2) {
                targetDrift = 0;
                ctx.strokeStyle = "orange";
            }
            if (l == 3) {
                targetDrift = -.55 * 1 * .05;
                ctx.strokeStyle = "yellow";
            }
            
            if (((Math.abs(targetXpos - 320) + (0.5 * $scope.hitboxWidth)) <= (0.5 * $scope.groundWidth))&&((((targetYpos - (0.5 * $scope.hitboxHeight)) >= top)&&((targetYpos - (0.5 * $scope.hitboxHeight)) <= bottom))||(((targetYpos + (0.5 * $scope.hitboxHeight)) >= top)&&((targetYpos + (0.5 * $scope.hitboxHeight)) <= bottom)))) 
              {                    
                    targetYpos = top - 1 - (0.5 * $scope.hitboxHeight); // This will handle invalid values
              }

            for (let i = 0; i < targetHitstun; ++i) {
                ctx.beginPath();
                ctx.moveTo(targetXpos, targetYpos);
                targetXpos += targetXv;

                if (((Math.abs(targetXpos - 320) + (0.5 * $scope.hitboxWidth)) <= (0.5 * $scope.groundWidth))&&((((targetYpos - (0.5 * $scope.hitboxHeight)) >= top)&&((targetYpos - (0.5 * $scope.hitboxHeight)) <= bottom))||(((targetYpos + (0.5 * $scope.hitboxHeight)) >= top)&&((targetYpos + (0.5 * $scope.hitboxHeight)) <= bottom)))) 
                  {                    
                      if (targetXv <= 0) 
                      {
                        targetXpos = 320 + (0.5 * ($scope.groundWidth + $scope.hitboxWidth));
                      }
                      if (targetXv > 0)
                      {
                        targetXpos = 320 - (0.5 * ($scope.groundWidth + $scope.hitboxWidth));
                      }
                      targetXv *= -0.9;
                  }

                targetYpos -= --targetYv;

                if (((Math.abs(targetXpos - 320) + (0.5 * $scope.hitboxWidth)) <= (0.5 * $scope.groundWidth))&&((((targetYpos - (0.5 * $scope.hitboxHeight)) >= top)&&((targetYpos - (0.5 * $scope.hitboxHeight)) <= bottom))||(((targetYpos + (0.5 * $scope.hitboxHeight)) >= top)&&((targetYpos + (0.5 * $scope.hitboxHeight)) <= bottom)))) 
                {                    
                    if (targetYv <= 0) 
                    {
                      targetYpos = top - 1 - (0.5 * $scope.hitboxHeight); //You need to factor in the hitbox itself or it never gets out of the ground
                    }
                    if (targetYv > 0)
                    {
                      targetYpos = bottom + 1 + (0.5 * $scope.hitboxHeight);
                    }
                    targetYv *= -0.7;
                }
                if (targetYv < -12) {
                    targetYv = -12;
                }

                //KO Detection
                if ((l == 2) && (!KOs))
                {
                  if ($scope.blastzone && ((Math.abs(targetXpos - 320) > $scope.bzx) || (Math.abs(targetYpos - 180) > $scope.bzy)))//Not sure about bzy
                  {
                    KOs = true;
                  }
                  if (!$scope.blastzone && (((Math.abs(targetXpos - 320) >= $scope.bzx - 120)&&(Math.abs(targetXv) > 15)) || (((-(targetYpos-180)) > ($scope.bzy - 92)) && (targetYv > 10) && ((targetHitstun - (i + 1)) > 3)) || (((-(targetYpos-180)) < -$scope.bzy - 10))))
                  {
                    KOs = true;
                  }
                }

                targetXv += targetDrift;
                ctx.lineTo(targetXpos, targetYpos);
                ctx.stroke();
            }
            if (l == 2)
            {
              $scope.line2 = "FinalX: " + (targetXpos - 320) + " Final Y: " + (-(targetYpos - 180));
              $scope.line3 = "ChangeX: " + (targetXpos - ($scope.xpos + 320)) + " ChangeY: " + (-(targetYpos - (-$scope.ypos + 180))) + " Xv: " + targetXv;
              $scope.line4 = "Does not KO";
              if (KOs)
              {
                $scope.line4 = "KO's on Classic Blastzone!";
                if($scope.blastzone)
                {
                  $scope.line4 = "KO's on Special Blastzone!";
                }
              }
            }
        }
        $scope.line1 = "DMG: " + $scope.selectedMove.DMG + " BK: " + $scope.selectedMove.BK + " RK: " + $scope.selectedMove.RK + " BH: " + $scope.selectedMove.BH + " RH: " + $scope.selectedMove.RH + " AK: " + $scope.selectedMove.AK + " TK: " + $scope.selectedMove.TK;
        
    }
};

$scope.graphFollowUp = function() {
  $scope.line1 = "";
  $scope.line2 = "";
  $scope.line3 = "";
  $scope.line4 = "";
  if($scope.selectedMoveF)
  {
    //Set up canvas
    var canvas = document.getElementById('battleCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Render background
    var background = document.getElementById('background');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height); // Draw the background image
    //put character on screen
    var img = new Image();
    if ($scope.selectedMoveF.IconicFrame)
    {
      img.src = '/images/animationframes/' + $scope.characterName + '/' + $scope.selectedMoveF.AttackName + $scope.selectedMoveF.IconicFrame + '.svg';
      img.onload = function()
      { // Draw the image at half its size
        var imgWidth = img.width / 2;
        var imgHeight = img.height / 2;
        ctx.drawImage(img, $scope.xpos + 320 - (0.5 * imgWidth), -$scope.ypos + 180 - (0.5 * imgHeight), imgWidth, imgHeight);
        };
    }
    //Set color
    ctx.strokeStyle = "#1846b9";//blue
    ctx.lineWidth = 5;
    //Hitstun
    var targetHitstun = Math.ceil(($scope.scaleBH * 2.4 * $scope.selectedMoveF.BH) + (($scope.targetPercent + ($scope.selectedMoveF.DMG * $scope.scaleDMG)) * $scope.scaleRH * .008 * $scope.selectedMoveF.RH * $scope.selectedMoveF.RH)) - 2;
    //Collision variables
    var top = 180 - $scope.groundLine;//180 is 1/2 the canvas height
    var bottom = top + $scope.groundDepth;
    //coords for the followup
    var leftX = $scope.xpos + 320;
    var rightX = $scope.xpos + 320;
    var topY = -$scope.ypos + 180;
    var bottomY = -$scope.ypos + 180;

    var frameadvantage; //do some calculation
    //Put the early or late hit logic here
    if($scope.EoL || ($scope.selectedMoveF.MoveType == 'FULL'))
    {
      //Late hit
      frameadvantage = targetHitstun - ($scope.selectedMoveF.Endlag + 1);
      if($scope.selectedMoveF.MoveType == 'Projectile')
      {
        frameadvantage = targetHitstun - ($scope.selectedMoveF.Endlag - $scope.selectedMoveF.Active);
      }
      //console.log("Latehit");
    }
    else
    {
      //Early hit
      frameadvantage = targetHitstun - ($scope.selectedMoveF.Active + $scope.selectedMoveF.Endlag - 1);
      if($scope.selectedMoveF.MoveType == 'Projectile')
      {
        frameadvantage = targetHitstun - ($scope.selectedMoveF.Endlag);
      }
      //console.log("Earlyhit");
    }   

    //Pick which duration to use for the move
    //Graph trivial player line, if in advantage, then once the move ends, calculate top Y based on the height switch case

    //Either lasts as long as the hitstun or the duration of the move
    var duration = targetHitstun;
    if (frameadvantage <= 0)
    {
      duration = Math.abs(frameadvantage - targetHitstun);
    }

    for (let l = 0; l < 2; ++l)
    {
      var Xpos = $scope.xpos + 320;
      var Ypos = -$scope.ypos + 180;
      var timer = duration;
      var activeFrames = $scope.selectedMoveF.Active - 1;
      var endlagFrames = $scope.selectedMoveF.Endlag;

      var Xv = $scope.initialXv;
      var Yv = $scope.initialYv;

      if (((Math.abs(Xpos - 320) + (0.5 * $scope.hitboxWidth)) <= (0.5 * $scope.groundWidth))&&((((Ypos - (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos - (0.5 * $scope.hitboxHeight)) <= bottom))||(((Ypos + (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos + (0.5 * $scope.hitboxHeight)) <= bottom)))) 
      {
        Ypos = top - 1 - (0.5 * $scope.hitboxHeight);
      }
      
      //Apply ChangeXv and ChangeYv if they exist
      if($scope.selectedMoveF.ChangeXv)
      {
      if ($scope.selectedMoveF.MoveType == 'Side Air Kick')
      {
        Xv = ($scope.selectedMoveF.ChangeXv) * Xv;
      }
      else if ($scope.selectedMoveF.MoveType == 'Dashing Kick')
      {
        Xv = ($scope.LoR ? 1 : -1) * ($scope.selectedMoveF.ChangeXv) * Xv;
      }
      else
      {
        Xv = $scope.selectedMoveF.ChangeXv;
      }
      }
      if ($scope.selectedMoveF.ChangeYv)
      {
        Yv = $scope.selectedMoveF.ChangeYv;
      }
      //console.log("ChangeXv: ",$scope.selectedMoveF.ChangeXv, " ChangeYv: ",$scope.selectedMoveF.ChangeYv);
      
      if (!$scope.LoR)
      {
        Xv *= -1;
      }

      //Decay Momentum if the hit is late
      if ($scope.EoL || ($scope.selectedMoveF.MoveType == 'FULL'))
      {
        activeFrames = 1;
        //Super Decay for Latehit
        //console.log("Late Decay: ", (Xv + (.575 * ($scope.selectedMoveF.Active - 1))) * Math.pow(.91, $scope.selectedMoveF.Active - 1), "VS Xv: ", Xv);
        Xv = (Xv + (($scope.LoR? 1: -1) * .575 * ( $scope.selectedMoveF.Mobility ? $scope.selectedMoveF.Mobility : 0 ) * ($scope.selectedMoveF.Active - 1))) * Math.pow(.91, $scope.selectedMoveF.Active - 1) ;
        Yv -= $scope.selectedMoveF.Active - 1;

        //Stepping Stones
        if ($scope.selectedMoveF.MoveType == 'Stepping Stones')
        {
          Yv = 35;
        }
      }
      
      var direction = 1;
      var attacking = true;
      if (l)
      {
        direction = -1;
        ctx.strokeStyle = "#33e8fe";//cyan
      }

      for (let i = 0; i < timer; ++i)
      {
        ctx.beginPath();
        ctx.moveTo(Xpos, Ypos);

        //Decay X
        Xv = Xv * 0.91;
        //Change X
        Xpos += Xv;
        //Side Collision X
        if (((Math.abs(Xpos - 320) + (0.5 * $scope.hitboxWidth)) <= (0.5 * $scope.groundWidth))&&((((Ypos - (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos - (0.5 * $scope.hitboxHeight)) <= bottom))||(((Ypos + (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos + (0.5 * $scope.hitboxHeight)) <= bottom)))) 
          {                    
              if (Xv <= 0) 
              {
                Xpos = 320 + (0.5 * ($scope.groundWidth + $scope.hitboxWidth));
              }
              if (Xv > 0)
              {
                Xpos = 320 - (0.5 * ($scope.groundWidth + $scope.hitboxWidth));
              }
              Xv = 0;
          }
        //Input X
        Xv += (direction * (Yv == 0 ? 0.60 : 0.55 ) * (attacking  ? ( $scope.selectedMoveF.Mobility ? $scope.selectedMoveF.Mobility : 0 ): 1));

        //Change Y
        Ypos -= --Yv;
        //Floor Collision Y
        if (((Math.abs(Xpos - 320) + (0.5 * $scope.hitboxWidth)) <= (0.5 * $scope.groundWidth))&&((((Ypos - (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos - (0.5 * $scope.hitboxHeight)) <= bottom))||(((Ypos + (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos + (0.5 * $scope.hitboxHeight)) <= bottom)))) 
        {                    
            if (Yv <= 0) 
            {
              Ypos = top - 1 - (0.5 * $scope.hitboxHeight); //You need to factor in the hitbox itself or it never gets out of the ground
            }
            if (Yv > 0)
            {
              Ypos = bottom + 1 + (0.5 * $scope.hitboxHeight);
            }
            Yv = 0;
        }
        //Terminal Velocity Y
        if (Yv < -12) {
            Yv = -12;
        }

        ctx.lineTo(Xpos, Ypos);
        ctx.stroke();
        //decrement other timers for logic
        if(activeFrames >= 0)
        {
          --activeFrames;
          if (activeFrames == 0)
          {
              if ($scope.selectedMoveF.MoveType == 'Dash')
              {
                Xv = Yv = 0;
              }
          }
        }
        else
        {
          --endlagFrames;
          if (endlagFrames <= 0)
          {
            attacking = false;
          }
        }

      }

      // Set the coords
      if (l)
      {
        leftX = Xpos;
      }
      else
      {
        rightX = Xpos;
        bottomY = Ypos;
      }
            //Addition Line for Up Specials
      if(($scope.selectedMoveF.MoveType == "Recovery")||($scope.selectedMoveF.MoveType == "Graceful Leap")||($scope.selectedMoveF.MoveType == "Trampoline")||($scope.selectedMoveF.MoveType == "Stepping Stones"))
      {
        ctx.strokeStyle = "#11871a";
        for (let i = 0; i < 20; ++i)
        {
          ctx.beginPath();
          ctx.moveTo(Xpos, Ypos);
  
          //Decay X
          Xv = Xv * 0.91;
          //Change X
          Xpos += Xv;
          //Side Collision X
          if (((Math.abs(Xpos - 320) + (0.5 * $scope.hitboxWidth)) <= (0.5 * $scope.groundWidth))&&((((Ypos - (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos - (0.5 * $scope.hitboxHeight)) <= bottom))||(((Ypos + (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos + (0.5 * $scope.hitboxHeight)) <= bottom)))) 
            {                    
                if (Xv <= 0) 
                {
                  Xpos = 320 + (0.5 * ($scope.groundWidth + $scope.hitboxWidth));
                }
                if (Xv > 0)
                {
                  Xpos = 320 - (0.5 * ($scope.groundWidth + $scope.hitboxWidth));
                }
                targetXv = 0;
            }
          //Input X
          Xv += (direction * (Yv == 0 ? 0.60 : 0.55 ) * (attacking  ? ( $scope.selectedMoveF.Mobility ? $scope.selectedMoveF.Mobility : 0 ): 1));
  
          //Change Y
          Ypos -= --Yv;
          //Floor Collision Y
          if (((Math.abs(Xpos - 320) + (0.5 * $scope.hitboxWidth)) <= (0.5 * $scope.groundWidth))&&((((Ypos - (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos - (0.5 * $scope.hitboxHeight)) <= bottom))||(((Ypos + (0.5 * $scope.hitboxHeight)) >= top)&&((Ypos + (0.5 * $scope.hitboxHeight)) <= bottom)))) 
          {                    
              if (Yv <= 0) 
              {
                Ypos = top - 1 - (0.5 * $scope.hitboxHeight); //You need to factor in the hitbox itself or it never gets out of the ground
              }
              if (Yv > 0)
              {
                Ypos = bottom + 1 + (0.5 * $scope.hitboxHeight);
              }
              Yv = 0;
          }
          //Terminal Velocity Y
          if (Yv < -12) {
              Yv = -12;
          }
  
          ctx.lineTo(Xpos, Ypos);
          ctx.stroke();
                  //decrement other timers for logic
        if(activeFrames >= 0)
          {
            --activeFrames;
            if (activeFrames == 0)
            {
                if ($scope.selectedMoveF.MoveType == 'Dash')
                {
                  Xv = Yv = 0;
                }
            }
          }
          else
          {
            --endlagFrames;
            if (endlagFrames <= 0)
            {
              attacking = false;
            }
          }
        }
      }
    }
    // Front Range lines
    if($scope.selectedMoveF.FrontRange)
    {
      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo($scope.xpos + 320, -$scope.ypos + 200);
      ctx.lineTo($scope.xpos + 320 + $scope.selectedMoveF.FrontRange, -$scope.ypos + 200);
      ctx.stroke();
    }
    

    // Check for advantage and graph lines if plus
    if (frameadvantage > 0)
    {
      ctx.strokeStyle = "#fe00ca";

      if(frameadvantage < 3)
      {
        topY -= 9.02;
      }
      else if(frameadvantage < 5)
      {
        topY -= 22.04;
      }
      else if(frameadvantage < 7)
      {
        topY -= 37.06;
      }
      else
      {
        topY -= 37.06;
        for (let i = 0; i <= frameadvantage - 7; ++i)
        {
          topY -= (10.01 - (1 * (i < 11 ? i : 10.01)));
        }
      }


      ctx.beginPath();
      ctx.moveTo(leftX, -$scope.ypos + 180);
      ctx.lineTo(rightX, -$scope.ypos + 180);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo($scope.xpos + 320, topY);
      ctx.lineTo($scope.xpos + 320, bottomY);
      ctx.stroke();

    }
    $scope.line1 = "BH: " + $scope.selectedMoveF.BH + " RH: " + $scope.selectedMoveF.RH + ($scope.selectedMoveF.Startup ? (" StartUp: " + $scope.selectedMoveF.StartUp) : "") + " Active: " + $scope.selectedMoveF.Active + " Endlag: " + $scope.selectedMoveF.Endlag + " Mobility: " + $scope.selectedMoveF.Mobility;
    $scope.line2 = "Frame Advantage: " + frameadvantage;
  }
};

// Function to reset the canvas
$scope.resetCanvas = function() {
  var canvas = document.getElementById('battleCanvas');
  var ctx = canvas.getContext('2d');
  var background = document.getElementById('background');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height); // Draw the background image
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// Function to save the canvas as an image
$scope.saveCanvas = function() {
  var canvas = document.getElementById('battleCanvas');
  var link = document.createElement('a');
  link.download = 'battle-canvas.png';
  link.href = canvas.toDataURL();
  link.click();
};

$scope.switchPage = function(newPageType) {
  window.location.href = '/' + newPageType + '/' + $scope.characterName;
  //console.log("CLICK");
};

});
