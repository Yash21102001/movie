const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yash2110:yash2110@cluster0.qdrur.mongodb.net/')

const db = mongoose.connection

db.on('connected',(err)=>{
    if (!err) {
        console.log("database is connected");
    }
})

module.exports = db;