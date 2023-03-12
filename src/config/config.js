const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    dbUrl : process.env.dbUrl, 
    PORT : process.env.PORT
}