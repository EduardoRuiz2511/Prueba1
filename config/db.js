const Sequelize = require('sequelize');
//extraer valores de variables env
require('dotenv').config({path: 'variables.env'});


const db = new Sequelize(
  process.env.BD_NOMBRE,
  process.env.BD_USER, 
  process.env.BD_PASS, {
//const db = new Sequelize('tareas', 'root', 'root', {
  
  //host: '127.0.0.1',
  host: process.env.BD_HOST,

  dialect: 'mysql',
  //port: '3306',
  port: process.env.BD_PORT,
  //operatorsAliases: false,
  define: {
      timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;