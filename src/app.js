const { Sequelize } = require('sequelize');
const { program } = require('@caporal/core');

const conn = new Sequelize('tes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const Data = conn.define("data", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    act: {
      type: Sequelize.STRING,
    },
    stat: {
      type: Sequelize.STRING,
    },
  });

  program
  .action(() => {
      (async () => {
          let data = await Data.findAll({ raw: true });
          data.forEach(data => {
              console.log(`${data.id}. ${data.act}. ${data.stat}`)
          })
            conn.close();
      })()
  })

  program.run();