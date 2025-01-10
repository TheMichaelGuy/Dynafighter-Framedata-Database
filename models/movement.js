const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movement', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'moveidentifier',
        key: 'ID'
      }
    },
    AlterSpeed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ChangeXv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ChangeYv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FrontRange: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movement',
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
