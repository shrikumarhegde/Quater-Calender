var express = require('express');
var path = require('path');
var logger = require('winston');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//static website files path
app.use(express.static(path.join(__dirname, 'public')));


app.listen(5000, function() {
    console.log('Server started');
});