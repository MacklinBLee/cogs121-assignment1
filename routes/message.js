var models = require("../models");

exports.send = function(req, res) { 
  console.log(req.body); // help you see what is inside of req.body
  var message = new models.Message(
    {
    "username": socket.request.session.passport.user.username,
    "comment": req.body.food,
    "rating": req.body.rating
	
    }
   );


  message.save(saving)
  
    function saving(err) {
      if(err)
        console.log(err);
      res.redirect('/home');
    }
  
};