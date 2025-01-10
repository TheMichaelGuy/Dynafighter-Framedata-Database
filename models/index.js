const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dffddb2', 'root', 'H3x4Cy^nRed', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
