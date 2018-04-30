var express = require('express');
var path = require('path');
var logger = require('winston');
var bodyParser = require('body-parser');
var proxy = require('http-proxy-middleware');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.all('api/**', function(req, res, next) {
//     // Reuire all /api bound requests to be xhr requests with a valid header set.
//     if (!req.xhr) return res.status(400).send();
//     // Header is present, allow request to proceed
//     console.log('comes');
//     next();
//   });


//static website files path
app.use(express.static(path.join(__dirname, 'public')));

    let api_url='http://10.155.73.247:8080/wpm3dit';
    let apiProxyContext = '/api';
    let apiProxyOptions = {
      target: api_url,
    };
  
app.use(proxy(apiProxyContext,apiProxyOptions));

apiProxyContext='/webapp'
app.use(proxy(apiProxyContext,apiProxyOptions));

app.listen(5000, function() {
    console.log('Server started');
});