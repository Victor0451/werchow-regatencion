const Sequelize = require('sequelize');
const db = require('../db/database.js');

module.exports = db.sequelize.define(
  'atencion',
  {
    id_atencion: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    nombre: {
      type: Sequelize.STRING
    },
    apellido: {
      type: Sequelize.STRING
    },
    dni: {
      type: Sequelize.INTEGER
    },
    celular: {
      type: Sequelize.INTEGER
    },
    telefono: {
      type: Sequelize.INTEGER
    },
    motivo: {
      type: Sequelize.STRING
    },
    detalle_motivo: {
      type: Sequelize.TEXT
    },
    operador: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: true
  }
)