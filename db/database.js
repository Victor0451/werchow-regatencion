const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize({
  host: '192.168.1.102',
  database: 'werchow_regatencion',
  username: 'vlongo',
  password: 'nokia5800',
  dialect: 'mysql',


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;