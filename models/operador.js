const Sequelize = require('sequelize');
const db = require('../db/database.js');

module.exports = db.sequelize.define(
  'operador',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    usuario: {
      type: Sequelize.STRING
    },
    contrasena: {
      type: Sequelize.STRING
    },
    perfil: {
      type: Sequelize.STRING
    },
    estado: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: true
  }
)