const {
    dbName,
    dbUser,
    dbPass,
    dbHost,
    dbDialect,
    dbMax,
    dbMin,
    dbAcquire,
    dbIdle
} = require('../config/dbConfig')
const Sequelize = require('sequelize');
const userModel = require('./User')
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: dbDialect,
    operatorAlias: false,
    pool: {
        max: parseInt(dbMax),
        min: parseInt(dbMin),
        acquire: dbAcquire,
        idle: dbIdle
    }
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = userModel(sequelize, Sequelize);

module.exports = db;