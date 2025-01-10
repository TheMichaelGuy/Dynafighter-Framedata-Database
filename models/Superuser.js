const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Superuser = sequelize.define('Superuser', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Superuser;
