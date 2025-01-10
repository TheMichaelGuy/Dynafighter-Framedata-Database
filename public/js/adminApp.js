var app = angular.module('AdminModule', []);

app.controller('AdminController', function($scope, $http) {
  $scope.moveIdentifiers = [];
  $scope.moveFrameData = [];
  $scope.movement = [];
  $scope.moveStats = [];
  $scope.moveStatsRuby = [];

  //moveidentifier marked with I
  $scope.newMoveI = {};
  $scope.editMoveI = {};
  //moveframedata marked with F
  $scope.newMoveF = {};
  $scope.editMoveF = {};
  //movement marked with M
  $scope.newMoveM = {};
  $scope.editMoveM = {};
  //movestats marked with S
  $scope.newMoveS = {};
  $scope.editMoveS = {};
  //movestatsruby marked with R
  $scope.newMoveR = {};
  $scope.editMoveR = {};

  $scope.message = "There is no master view. Please be careful when editing";

/// MOVEIDENTIFIER
  // Fetch move identifiers
  $http.get('/api/moveidentifier')
    .then(function(response) {
      $scope.moveIdentifiers = response.data;
    }, function(error) {
      console.error('Error fetching moveidentifier table:', error);
    });

  // Find the smallest available ID
  function findSmallestAvailableID() {
    let ids = $scope.moveIdentifiers.map(move => move.ID);
    ids.sort((a, b) => a - b);
    for (let i = 1; i <= ids.length; i++) {
      if (ids[i - 1] !== i) {
        return i;
      }
    }
    return ids.length + 1;
  }

  // Add a new move identifier
  $scope.addMoveI = function() {
    $scope.newMoveI.ID = findSmallestAvailableID();
    $scope.newMoveI.IconicFrame = $scope.newMoveI.IconicFrame || null;
    $http.post('/api/moveidentifier', $scope.newMoveI)
      .then(function(response) {
        $scope.moveIdentifiers.push(response.data);
        $scope.newMoveI = {}; // Clear the form
      }, function(error) {
        console.error('Error adding move identifier:', error);
      });
  };

  // Update a move identifier
  $scope.updateMoveI = function(move) {
    move.IconicFrame = move.IconicFrame || null;
    $http.put('/api/moveidentifier/' + move.ID, move)
      .then(function(response) {
        // Handle successful update
        const index = $scope.moveIdentifiers.findIndex(m => m.ID === move.ID);
        if (index !== -1) {
          $scope.moveIdentifiers[index] = move;
        }
      }, function(error) {
        console.error('Error updating move identifier:', error);
      });
  };

  // Delete a move identifier
  $scope.deleteMoveI = function(move) {
    $http.delete('/api/moveidentifier/' + move.ID)
      .then(function(response) {
        const index = $scope.moveIdentifiers.indexOf(move);
        $scope.moveIdentifiers.splice(index, 1);
      }, function(error) {
        console.error('Error deleting move identifier:', error);
      });
  };

///  MOVEFRAMEDATA
  // Fetch move frame data
  $http.get('/api/moveframedata')
    .then(function(response) {
      $scope.moveFrameData = response.data;
    }, function(error) {
      console.error('Error fetching moveframedata table:', error);
    });

 // Add a new move frame data
 $scope.addMoveF = function() {
  $scope.newMoveF.Mobility = $scope.newMoveF.Mobility || null;
  $scope.newMoveF.LinksTo = $scope.newMoveF.LinksTo || null;
  $http.post('/api/moveframedata', $scope.newMoveF)
    .then(function(response) {
      $scope.moveFrameData.push(response.data);
      $scope.newMoveF = {}; // Clear the form
    }, function(error) {
      console.error('Error adding moveframedata:', error);
    });
};

// Update a moveframedata
$scope.updateMoveF = function(move) {
  move.Mobility = move.Mobility || null;
  move.LinksTo = move.LinksTo || null;
  $http.put('/api/moveframedata/' + move.ID, move)
    .then(function(response) {
      // Handle successful update
      const index = $scope.moveFrameData.findIndex(m => m.ID === move.ID);
      if (index !== -1) {
        $scope.moveFrameData[index] = move;
      }
    }, function(error) {
      console.error('Error updating moveframedata:', error);
    });
};

// Delete a moveframedata
$scope.deleteMoveF = function(move) {
  $http.delete('/api/moveframedata/' + move.ID)
    .then(function(response) {
      const index = $scope.moveFrameData.indexOf(move);
      $scope.moveFrameData.splice(index, 1);
    }, function(error) {
      console.error('Error deleting moveframedata:', error);
    });
};

/// MOVEMENT
  // Fetch movement
  $http.get('/api/movement')
    .then(function(response) {
      $scope.movement = response.data;
    }, function(error) {
      console.error('Error fetching movement table:', error);
    });

  // Add a new movement
  $scope.addMoveM = function() {
    $scope.newMoveM.ChangeXv = $scope.newMoveM.ChangeXv || null;
    $scope.newMoveM.ChangeYv = $scope.newMoveM.ChangeYv || null;
    $http.post('/api/movement', $scope.newMoveM)
      .then(function(response) {
        $scope.movement.push(response.data);
        $scope.newMoveM = {}; // Clear the form
      }, function(error) {
        console.error('Error adding movement:', error);
      });
  };

  // Update a movement
  $scope.updateMoveM = function(move) {
    move.ChangeXv = move.ChangeXv || null;
    move.ChangeYv = move.ChangeYv || null;
    $http.put('/api/movement/' + move.ID, move)
      .then(function(response) {
        // Handle successful update
        const index = $scope.movement.findIndex(m => m.ID === move.ID);
        if (index !== -1) {
          $scope.movement[index] = move;
        }
      }, function(error) {
        console.error('Error updating movement:', error);
      });
  };

  // Delete a movement
  $scope.deleteMoveM = function(move) {
    $http.delete('/api/movement/' + move.ID)
      .then(function(response) {
        const index = $scope.movement.indexOf(move);
        $scope.movement.splice(index, 1);
      }, function(error) {
        console.error('Error deleting movement:', error);
      });
  };

/// MOVE STATS
  // Fetch move stats
  $http.get('/api/movestats')
    .then(function(response) {
      $scope.moveStats = response.data;
    }, function(error) {
      console.error('Error fetching movestats table:', error);
    });

  // Add a new movestats
  $scope.addMoveS = function() {
    $http.post('/api/movestats', $scope.newMoveS)
      .then(function(response) {
        $scope.moveStats.push(response.data);
        $scope.newMoveS = {}; // Clear the form
      }, function(error) {
        console.error('Error adding movestats:', error);
      });
  };

  // Update a movestats
  $scope.updateMoveS = function(move) {
    $http.put('/api/movestats/' + move.ID, move)
      .then(function(response) {
        // Handle successful update
        const index = $scope.moveStats.findIndex(m => m.ID === move.ID);
        if (index !== -1) {
          $scope.moveStats[index] = move;
        }
      }, function(error) {
        console.error('Error updating movestats:', error);
      });
  };

  // Delete a movestats
  $scope.deleteMoveS = function(move) {
    $http.delete('/api/movestats/' + move.ID)
      .then(function(response) {
        const index = $scope.moveStats.indexOf(move);
        $scope.moveStats.splice(index, 1);
      }, function(error) {
        console.error('Error deleting movestats:', error);
      });
  };

/// MOVE STATS RUBY
  // Fetch movestatsruby
  $http.get('/api/movestatsruby')
  .then(function(response) {
    $scope.moveStatsRuby = response.data;
  }, function(error) {
    console.error('Error fetching movestatsruby table:', error);
  });

  // Add a new movestatsruby
  $scope.addMoveR = function() {
    $http.post('/api/movestatsruby', $scope.newMoveR)
      .then(function(response) {
        $scope.moveStatsRuby.push(response.data);
        $scope.newMoveR = {}; // Clear the form
      }, function(error) {
        console.error('Error adding movestatsruby:', error);
      });
  };

  // Update a movestatsruby
  $scope.updateMoveR = function(move) {
    $http.put('/api/movestatsruby/' + move.ID, move)
      .then(function(response) {
        // Handle successful update
        const index = $scope.moveStatsRuby.findIndex(m => m.ID === move.ID);
        if (index !== -1) {
          $scope.moveStatsRuby[index] = move;
        }
      }, function(error) {
        console.error('Error updating movestatsruby:', error);
      });
  };

  // Delete a movestatsruby
  $scope.deleteMoveR = function(move) {
    $http.delete('/api/movestatsruby/' + move.ID)
      .then(function(response) {
        const index = $scope.moveStatsRuby.indexOf(move);
        $scope.moveStatsRuby.splice(index, 1);
      }, function(error) {
        console.error('Error deleting movestatsruby:', error);
      });
  };
  
});
