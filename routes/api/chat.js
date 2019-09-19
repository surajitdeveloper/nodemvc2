var express = require('express')
var router = express.Router();

var fs            = require("fs");
var http          = require('http');
var path          = require('path');
var https         = require('https');
var multer        = require('multer');
var bodyParser    = require('body-parser');
var session       = require('express-session');


// Require controller modules.
var chat_controller = require('../../app/chat/controllers/chatController');
var auth 			= require('../../app/chat/middlewares/chatMiddleware');




// GET request.
//auth, 
router.post('/testApi', chat_controller.post_testApi);

module.exports = router