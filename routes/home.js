var models = require("../models");

exports.view = function(req, res) {
    models.Message.find().exec(saving);
   
    function saving(err, message) {
      if(err)
    	console.error(err);
		
      var data = {data: message};
      res.render("home", data);
    }
}