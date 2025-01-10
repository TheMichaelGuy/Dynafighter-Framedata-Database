const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movestats', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'moveidentifier',
        key: 'ID'
      }
    },
    DMG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BK: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RK: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BH: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RH: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    AK: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TK: {
      type: DataTypes.STRING(9),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movestats',
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
