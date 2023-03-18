const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dbName: process.env.DBNAME,
    dbUser: process.env.DBUSER,
    dbPass: process.env.DBPASS,
    dbHost: process.env.DBHOST
}