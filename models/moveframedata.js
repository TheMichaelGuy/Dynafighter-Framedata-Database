const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moveframedata', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'moveidentifier',
        key: 'ID'
      }
    },
    StartUp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Active: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Endlag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Mobility: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MoveType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LinksTo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InputType: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'moveframedata',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
