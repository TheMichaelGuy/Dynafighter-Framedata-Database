var DataTypes = require("sequelize").DataTypes;
var _mastersheet = require("./mastersheet");
var _moveframedata = require("./moveframedata");
var _moveidentifier = require("./moveidentifier");
var _movement = require("./movement");
var _movestats = require("./movestats");
var _movestatsruby = require("./movestatsruby");
var _superusers = require("./superusers");

function initModels(sequelize) {
  var mastersheet = _mastersheet(sequelize, DataTypes);
  var moveframedata = _moveframedata(sequelize, DataTypes);
  var moveidentifier = _moveidentifier(sequelize, DataTypes);
  var movement = _movement(sequelize, DataTypes);
  var movestats = _movestats(sequelize, DataTypes);
  var movestatsruby = _movestatsruby(sequelize, DataTypes);
  var superusers = _superusers(sequelize, DataTypes);

  moveframedata.belongsTo(moveidentifier, { as: "ID_moveidentifier", foreignKey: "ID"});
  moveidentifier.hasOne(moveframedata, { as: "moveframedatum", foreignKey: "ID"});
  movement.belongsTo(moveidentifier, { as: "ID_moveidentifier", foreignKey: "ID"});
  moveidentifier.hasOne(movement, { as: "movement", foreignKey: "ID"});
  movestats.belongsTo(moveidentifier, { as: "ID_moveidentifier", foreignKey: "ID"});
  moveidentifier.hasOne(movestats, { as: "movestat", foreignKey: "ID"});
  movestatsruby.belongsTo(moveidentifier, { as: "ID_moveidentifier", foreignKey: "ID"});
  moveidentifier.hasOne(movestatsruby, { as: "movestatsruby", foreignKey: "ID"});

  return {
    mastersheet,
    moveframedata,
    moveidentifier,
    movement,
    movestats,
    movestatsruby,
    superusers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
