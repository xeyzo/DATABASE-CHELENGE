const { Sequelize } = require('sequelize');
const { CLI } = require('@caporal/core');

const conn = new Sequelize('tes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const Data = conn.define('data', {
    id : Sequelize.INTEGER,
    act: Sequelize.VARCHAR,
    stat: Sequelize.VARCHAR
  });

CLI  
  .action(() => {
    (async () => {
    let todolist = await tes.findAll({ raw: true });
            todolist.forEach(data => {
                console.log(`${this.id}. ${this.act}. (${this.stat})`)
            })
            conn.close();
        })()
    }
  )

    CLI.run();
