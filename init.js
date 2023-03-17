const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const {port} = require('./config/config');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log(`Running at http://127.0.0.1:${port}`);
})