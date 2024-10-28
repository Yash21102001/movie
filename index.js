const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser');
const port = 8081;
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.static('node_modules'))
app.use('/',require('./routers/index'))
app.listen(port,(err)=>{
    if (!err){
        console.log("server start on http://localhost:" + port);
    }
})