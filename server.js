var express       = require('express');
var app           = express();

var fs            = require("fs");
var http          = require('http');
var cors          = require('cors');
var path          = require('path');
var https         = require('https');
var multer        = require('multer');
var bodyParser    = require('body-parser');
var session       = require('express-session');
var server = require('http').createServer(app);




//exit;
var bodyParser    = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.json());


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// routes file
var chat 		   = require('./routes/api/chat');
var seller 		   = require('./routes/api/seller');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/chat', chat);
app.use('/seller', seller);





server = app.listen(8877, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("listening at http://%s:%s", host, port)
});
