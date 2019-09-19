var formidable = require('formidable');
var fs = require('fs');
var sellerData = [];
var tags = [];
var sellerAdd = (req, res) => {
	// req.body.userEmail;

	
    // let params = {};
    let return_index = req.body.form_id ? req.body.form_id : 0;
    let returnData = {};
    req.body.form_id = undefined;
    if(return_index == 0)
    {

        let form_step = req.body.form_step ? req.body.form_step : 1;
        req.body.form_step = undefined;
        let insert_data = {formData: req.body, formStep: form_step};
        sellerData.push(insert_data);
        let form_id = sellerData.indexOf(insert_data);
        if(form_id > -1)
        {
            returnData = insert_data;
            returnData.form_id = form_id + 1;
        }
    }
    else
    {
        let form_step = req.body.form_step ? req.body.form_step : 1;
        req.body.form_step = undefined;
        let old_data = sellerData[return_index - 1].formData;
        let new_data = req.body;
        let data = {...old_data, ...new_data }
        let insert_data = {formData: data, formStep: form_step};
        let form_id = return_index - 1;
        sellerData[form_id] = insert_data;
        
        returnData = insert_data;
        returnData.form_id = form_id + 1;
    }
	var obj = {
        "statusCode" 	: 200,
        "statusFlag"	: true,
        "statusMessage" : "Added Successful",
        "data"          : returnData
    }
    res.send(obj);
	
	
};


var sellerGet = (req, res) => {

	
	// let params = {};
	var obj = {
        "statusCode" 	: 200,
        "statusFlag"	: true,
        "statusMessage" : 'seller get',
        "data"          : sellerData
    }
    res.send(obj);
	
	
};
var AddFiles = (req, res) => {
    // req.body.userEmail;
    
    //  /home/ubuntu/node-mvc/public
	
    // let params = {};
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/ubuntu/node-mvc/public/seller_file' + files.filetoupload.name;
      let file_url = 'http://13.235.106.41:8877/seller_file' + files.filetoupload.name
      fs.rename(oldpath, newpath, function (err) {
        var obj = {
            "statusCode" 	: 200,
            "statusFlag"	: true,
            "statusMessage" : 'File Added Completed'
        }
        if (err) { 
            // console.log(err); 
            obj.statusFlag = false;
            obj.statusMessage = "File Added Failed";
            obj.data = err;
            obj.statusCode = 400;
        }
        else {
            obj.statusCode = 200;
            obj.statusFlag = true;
            obj.statusMessage = "File Added Successful";
            obj.data = file_url;
        }
        res.send(obj);
      });
 });
	
	
	
};

var getTage = (req, res) => {

	
	// let params = {};
	var obj = {
        "statusCode" 	: 200,
        "statusFlag"	: true,
        "statusMessage" : 'Tags get',
        "data"          : tags
    }
    res.send(obj);
	
	
};
module.exports = {
    add 	: sellerAdd,
    get 	: sellerGet,
    addFiles: AddFiles,
    getTage: getTage
    // addTags: addTags
}