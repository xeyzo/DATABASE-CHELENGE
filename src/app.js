const { Sequelize } = require('sequelize');
const { cli } = require('@caporal/core');

const conn = new Sequelize('tes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const Data = conn.define('data', {
    id: Sequelize.INTEGER,
    act: Sequelize.STRING,
    stat: Sequelize.STRING
  });

cli  
  .action(() => {
    (async () => {
    let todolist = await data.findAll({ raw: true });
            todolist.forEach(data => {
                console.log(`${this.id}. ${this.act}. (${this.stat})`)
            })
            conn.close();
        })()
    }
  )

    cli.run();
