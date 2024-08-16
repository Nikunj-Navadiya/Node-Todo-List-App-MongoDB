const mongoose = require("mongoose");

const con = mongoose.connect(`mongodb://127.0.0.1/crud-app`);

const db = mongoose.connection;

db.on('connected', (err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log('DB is Run');
})

module.exports = db