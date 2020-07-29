const { Sequelize } = require('sequelize');

const conn = new Sequelize('tes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

(async () => {
    conn.authenticate()
        .then(() => console.log('connected'))
        .catch(err => console.log(err))
})()