const Sequelize = require('sequelize');
const {dbName, dbUser, dbPass, dbHost} = require('../config/dbConfig');
const sequelize = new Sequelize(dbName, dbUser, dbPass, {host: dbHost, dialect: 'mysql'});

sequelize.authenticate().then(() => {
    console.log('Database connected')
}).catch((err) => {
    console.log('Failed connect to db : '+ err);
})
