const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dbName: process.env.DBNAME,
    dbUser: process.env.DBUSER,
    dbPass: process.env.DBPASS,
    dbHost: process.env.DBHOST,
    dbDialect: process.env.DBDIALECT,
    dbMax: process.env.DBMAX,
    dbMin: process.env.DBMIN,
    dbAcquire: process.env.DBACQUIRE,
    dbIdle: process.env.DBIDLE
}