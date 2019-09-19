var Chat = require('../models/chatModel');

var post_testApi = function(req, res) {
	var userEmail 	='';// req.body.userEmail;

	
	let params = {};
	Chat.returnDialogObj(params, function(result){
		console.log('result',result);
		var obj = {
			"statusCode" 	: 200,
			"statusFlag"	: true,
			"statusMessage" : result
		}
		res.send(obj);
	});
	
	
};

module.exports = {
	post_testApi 	: post_testApi
}