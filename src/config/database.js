const mongoose = require('mongoose');

const {dbUrl} = require('./config.js');

const connect = async ()=>{
    await mongoose.connect(dbUrl);
}

module.exports = connect;

