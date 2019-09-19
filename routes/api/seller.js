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

var seller = require("../../app/seller/controllers/sellerController");




// GET request.
//auth, 
router.get('/get', seller.get);
router.post('/add', seller.add);
router.post('/addFiles', seller.addFiles);
router.get('/getTags', seller.getTage);
// router.post('/addTags', seller.addTags);

module.exports = router