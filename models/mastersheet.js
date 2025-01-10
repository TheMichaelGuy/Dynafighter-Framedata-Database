const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mastersheet', {
    ID: {
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
    },
    InputType: {
      type: DataTypes.STRING(7),
      allowNull: true
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
    },
    SND: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AnimationString: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    IconicFrame: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RubyDMG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RubyBK: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RubyRK: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RubyBH: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RubyRH: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RubyAK: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RubyHI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RubyTK: {
      type: DataTypes.STRING(9),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mastersheet',
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
