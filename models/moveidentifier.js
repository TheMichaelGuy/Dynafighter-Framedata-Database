const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moveidentifier', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CharacterName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    AttackName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    AttackID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IconicFrame: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'moveidentifier',
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
