var app = angular.module('FrameDataModule', ['ngSanitize']);

app.controller('FrameDataController', function($scope, $http) {
  // Extract character name from URL
  var path = window.location.pathname;
  var characterName = path.split('/').pop();
  console.log('Character Name:', characterName, 'Path: ', path); // Log the character name
  $scope.characterName = characterName;

  // Fetch frame data for the character
  $http.get('/api/frame-data/' + characterName)
    .then(function(response) {
      //console.log('Frame data fetched:', response.data); // Log the data
      var data = response.data;
      $scope.moveData = processMoveData(data);
    }, function(error) {
      console.error('Error fetching frame data from js:', error);
    });

  // Function to process move data based on cases
  function processMoveData(data) {
    var processedData = {
      groundMoves: [],
      airMoves: [],
      specialMoves: [],
      complexMoves: {}
    };
  
    data.forEach(function(move) {
      switch (move.InputType) {
        case 'Ground':
          processedData.groundMoves.push(move);
          break;
        case 'Air':
          processedData.airMoves.push(move);
          break;
        case 'Special':
          processedData.specialMoves.push(move);
          break;
      }
  
      // Group complex moves by AttackName
      if (['Counter', 'Slashbolt', 'Linkhit'].includes(move.MoveType)) {
        if (!processedData.complexMoves[move.AttackName]) {
          processedData.complexMoves[move.AttackName] = [];
        }
        processedData.complexMoves[move.AttackName].push(move);
      }
    });
  
    return processedData;
  }
  
  /*
  // Function to determine the case and generate the table
  $scope.generateTable = function(move) {
    if (!move || !move.MoveType) {
      return 'fail';
    }
    var htmlContent = '';
    switch (move.MoveType) {
      case 'Hit':
      case 'Recovery':
      case 'Stutter':
      case 'Dash':
      case 'Side Air Kick':
      case 'Dashing Kick':
      case 'Graceful Leap':
      case 'Stepping Stones': 
      case 'Quick Redirection':
      case 'Trampoline':
        htmlContent = generateStandardTable(move);
        break;
      case 'Projectile':
        htmlContent = generateProjectileTable(move);
        break;
      case 'Counter':
        htmlContent = generateCounterTable(move);
        break;
      case 'Slashbolt':
        htmlContent = generateSlashboltTable(move);
        break;
      case 'Linkhit':
        htmlContent = generateLinkhitTable(move);
        break;
      case 'FULL':
        htmlContent = generateMultihitTable(move);
        break;
      case 'Magic Trick':
        htmlContent = generateMagicTrickTable(move);
        break;
      default:
        htmlContent = '';
    }
    //console.log('Generated HTML:', htmlContent); // Log the generated HTML
    return htmlContent;
  };
  */
  
  // Function to determine the case and generate the table
  $scope.generateTable = function(move) {
    if (!move || !move.MoveType) {
        return '';
    }
    switch (move.MoveType) {
      //case 'Standard':
      case 'Hit':
      case 'Recovery':
      case 'Stutter':
      case 'Dash':
      case 'Side Air Kick':
      case 'Dashing Kick':
      case 'Graceful Leap':
      case 'Stepping Stones': 
      case 'Quick Redirection':
      case 'Trampoline':
      case 'Bullet Punch':
        return generateStandardTable(move);
      case 'Projectile':
        return generateProjectileTable(move);
      case 'Counter':
        return generateCounterTable(move);
      case 'Slashbolt':
        return generateSlashboltTable(move);
      //case 'Multiple':
      case 'Linkhit':
        return generateLinkhitTable(move);
      case 'FULL':
        return generateMultihitTable(move);
      case 'Magic Trick':
        return generateMagicTrickTable(move);
      default:
        return '';
    }
  };
  

  // Functions to generate tables for each case
  function generateStandardTable(move) {
    return `
      <div class="move-table">
        <div class="fddmovename">${move.AttackName}</div>
        <div class="fddmovepic"><img src="/images/gifs/${characterName}/${move.AttackName}.gif" alt="${move.AttackName}"></div>
        <div class="fddstartup">Start Up: ${move.StartUp}</div>
        <div class="fddactive">Active: ${move.Active}</div>
        <div class="fddendlag">Endlag: ${move.Endlag}</div>
        <div class="fddmobility">Mobility: ${move.Mobility} Front Range: ${move.FrontRange}</div>
        <div class="fdddamage">Damage: ${move.DMG}</div>
        <div class="fddknockback">Knockback: Base: ${move.BK} Rising: ${move.RK} Angle: ${move.AK}</div>
        <div class="fddhitstun">Hitstun: Base: ${move.BH} Rising: ${move.RH}</div>
        <div class="fddother">Hit Invincibility: ${move.HI} Knockback Type: ${move.TK}</div>
      </div>
    `;
  }
  
  function generateProjectileTable(move) {
    return `
      <div class="move-table">
        <div class="fddmovename">${move.AttackName}</div>
        <div class="fddmovepic"><img src="/images/gifs/${characterName}/${move.AttackName}.gif" alt="${move.AttackName}"></div>
        <div class="fddstartup">Start Up: ${move.StartUp}</div>
        <div class="fddendlag">Endlag: ${move.Endlag}</div>
        <div class="fddmobility">Mobility: ${move.Mobility} Front Range: ${move.FrontRange}</div>
        <div class="fdddamage">Damage: ${move.DMG}</div>
        <div class="fddknockback">Knockback: Base: ${move.BK} Rising: ${move.RK} Angle: ${move.AK}</div>
        <div class="fddhitstun">Hitstun: Base: ${move.BH} Rising: ${move.RH}</div>
        <div class="fddother">Hit Invincibility: ${move.HI} Knockback Type: ${move.TK}</div>
        <div class="fddmovepic"><img src="/images/projectiles/${move.LinksTo}.png" alt="Projectile #${move.LinksTo}"></div>
        <div class="fddactive">Projectile Duration: ${move.Active}</div>
      </div>
    `;
  }
//none of the complex moves work in the way that I would want them to, but they are fine for the sake of the project
  function generateCounterTable(move) {
    // Implement logic for counter moves
    var moves = $scope.moveData.complexMoves[move.AttackName];
    var combinedData = {
      AttackName: move.AttackName,
      StartUp: moves.map(m => m.StartUp).join(', '),
      Active: moves.map(m => m.Active).join(', '),
      Endlag: moves.map(m => m.Endlag).join(', '),
      Mobility: moves.map(m => m.Mobility).join(', '),
      DMG: moves.map(m => m.DMG).join(', '),
      BK: moves.map(m => m.BK).join(', '),
      RK: moves.map(m => m.RK).join(', '),
      AK: moves.map(m => m.AK).join(', '),
      BH: moves.map(m => m.BH).join(', '),
      RH: moves.map(m => m.RH).join(', '),
      HI: moves.map(m => m.HI).join(', '),
      TK: moves.map(m => m.TK).join(', '),
      FrontRange: moves.map(m => m.FrontRange).join(', ')
    };
  
    return `
      <div class="move-table">
        <div class="fddmovename">${combinedData.AttackName}</div>
        <div class="fddmovepic"><img src="/images/gifs/${characterName}/${combinedData.AttackName} Stance.gif" alt="${combinedData.AttackName}"></div>
        <div class="fddstartup">Start Up: ${combinedData.StartUp}</div>
        <div class="fddactive">Active: ${combinedData.Active}</div>
        <div class="fddendlag">Endlag: ${combinedData.Endlag}</div>
        <div class="fddmobility">Mobility: ${combinedData.Mobility} Front Range: ${combinedData.FrontRange}</div>
        <div class="fdddamage">Damage: ${combinedData.DMG}</div>
        <div class="fddknockback">Knockback: Base: ${combinedData.BK} Rising: ${combinedData.RK} Angle: ${combinedData.AK}</div>
        <div class="fddhitstun">Hitstun: Base: ${combinedData.BH} Rising: ${combinedData.RH}</div>
        <div class="fddother">Hit Invincibility: ${combinedData.HI} Knockback Type: ${combinedData.TK}</div>
        <div class="fddother"> This move cancels into an attack when hit with a non-projectile attack</div>
      </div>
    `;
  }

  function generateSlashboltTable(move) {
    // Implement logic for Slashbolt moves
    var moves = $scope.moveData.complexMoves[move.AttackName];
    var combinedData = {
      AttackName: move.AttackName,
      StartUp: moves.map(m => m.StartUp).join(', '),
      Active: moves.map(m => m.Active).join(', '),
      Endlag: moves.map(m => m.Endlag).join(', '),
      Mobility: moves.map(m => m.Mobility).join(', '),
      DMG: moves.map(m => m.DMG).join(', '),
      BK: moves.map(m => m.BK).join(', '),
      RK: moves.map(m => m.RK).join(', '),
      AK: moves.map(m => m.AK).join(', '),
      BH: moves.map(m => m.BH).join(', '),
      RH: moves.map(m => m.RH).join(', '),
      HI: moves.map(m => m.HI).join(', '),
      TK: moves.map(m => m.TK).join(', '),
      FrontRange: moves.map(m => m.FrontRange).join(', ')
    };
  
    return `
      <div class="move-table">
        <div class="fddmovename">${combinedData.AttackName}</div>
        <div class="fddmovepic"><img src="/images/gifs/${characterName}/${combinedData.AttackName}.gif" alt="${combinedData.AttackName}"></div>
        <div class="fddstartup">Start Up: ${combinedData.StartUp}</div>
        <div class="fddactive">Active: ${combinedData.Active}</div>
        <div class="fddendlag">Endlag: ${combinedData.Endlag}</div>
        <div class="fddmobility">Mobility: ${combinedData.Mobility} Front Range: ${combinedData.FrontRange}</div>
        <div class="fdddamage">Damage: ${combinedData.DMG}</div>
        <div class="fddknockback">Knockback: Base: ${combinedData.BK} Rising: ${combinedData.RK} Angle: ${combinedData.AK}</div>
        <div class="fddhitstun">Hitstun: Base: ${combinedData.BH} Rising: ${combinedData.RH}</div>
        <div class="fddother">Hit Invincibility: ${combinedData.HI} Knockback Type: ${combinedData.TK}</div>
        <div class="fddother"> This move has an additional projectile</div>
      </div>
    `;
  }

  function generateLinkhitTable(move) {
    // Implement logic for multiple elements of the same name
    var moves = $scope.moveData.complexMoves[move.AttackName];
    var combinedData = {
      AttackName: move.AttackName,
      StartUp: moves.map(m => m.StartUp).join(', '),
      Active: moves.map(m => m.Active).join(', '),
      Endlag: moves.map(m => m.Endlag).join(', '),
      Mobility: moves.map(m => m.Mobility).join(', '),
      DMG: moves.map(m => m.DMG).join(', '),
      BK: moves.map(m => m.BK).join(', '),
      RK: moves.map(m => m.RK).join(', '),
      AK: moves.map(m => m.AK).join(', '),
      BH: moves.map(m => m.BH).join(', '),
      RH: moves.map(m => m.RH).join(', '),
      HI: moves.map(m => m.HI).join(', '),
      TK: moves.map(m => m.TK).join(', '),
      FrontRange: moves.map(m => m.FrontRange).join(', ')
    };
  
    return `
      <div class="move-table">
        <div class="fddmovename">${combinedData.AttackName}</div>
        <div class="fddmovepic"><img src="/images/gifs/${characterName}/${combinedData.AttackName}.gif" alt="${combinedData.AttackName}"></div>
        <div class="fddstartup">Start Up: ${combinedData.StartUp}</div>
        <div class="fddactive">Active: ${combinedData.Active}</div>
        <div class="fddendlag">Endlag: ${combinedData.Endlag}</div>
        <div class="fddmobility">Mobility: ${combinedData.Mobility} Front Range: ${combinedData.FrontRange}</div>
        <div class="fdddamage">Damage: ${combinedData.DMG}</div>
        <div class="fddknockback">Knockback: Base: ${combinedData.BK} Rising: ${combinedData.RK} Angle: ${combinedData.AK}</div>
        <div class="fddhitstun">Hitstun: Base: ${combinedData.BH} Rising: ${combinedData.RH}</div>
        <div class="fddother">Hit Invincibility: ${combinedData.HI} Knockback Type: ${combinedData.TK}</div>
        <div class="fddother"> This move links into another hit</div>
      </div>
    `;
  
  }

  function generateMultihitTable(move) {
    // Implement logic for multiple elements of the same name
    return `
    <div class="move-table">
      <div class="fddmovename">${move.AttackName}</div>
      <div class="fddmovepic"><img src="/images/gifs/${characterName}/${move.AttackName}.gif" alt="${move.AttackName}"></div>
      <div class="fddstartup">Start Up: ${move.StartUp}</div>
      <div class="fddactive">Duration: ${move.Active}</div>
      <div class="fddendlag">Endlag: ${move.Endlag}</div>
      <div class="fddmobility">Mobility: ${move.Mobility} Front Range: ${move.FrontRange}</div>
      <div class="fdddamage">Total Damage: ${move.DMG}</div>
      <div class="fddknockback">Knockback: Base: ${move.BK} Rising: ${move.RK} Angle: ${move.AK}</div>
      <div class="fddhitstun">Hitstun: Base: ${move.BH} Rising: ${move.RH}</div>
      <div class="fddother">Hit Invincibility: ${move.HI} Knockback Type: ${move.TK}</div>
    </div>
  `;
  }

  function generateMagicTrickTable(move) {
    // Implement logic for multiple elements of the same name
    return `
    <div class="move-table">
      <div class="fddmovename">${move.AttackName}</div>
      <div class="fddmovepic"><img src="/images/gifs/${characterName}/${move.AttackName}.gif" alt="${move.AttackName}"></div>
      <div class="fddstartup">Start Up: ${move.StartUp}</div>
      <div class="fddactive">Active: 4</div>
      <div class="fddendlag">Endlag: 8</div>
      <div class="fddmobility">Mobility: ${move.Mobility} Front Range: ${move.FrontRange}</div>
      <div class="fdddamage">Damage: ???</div>
      <div class="fddknockback">Knockback: Base: ??? Rising: ??? Angle: ???</div>
      <div class="fddhitstun">Hitstun: Base: ??? Rising: ???</div>
      <div class="fddother">Hit Invincibility: ${move.HI} Knockback Type: ??? </div>
      <div class="fddother"> This move has random effects and kinda sucks</div>
    </div>
  `;
  }

});
