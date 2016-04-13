// var models = require("../models");
var data = require("../data.json");


exports.view = function(req, res) {
    console.log("likes clicked: " + req.body.likes);
	data.likes = req.body.likes;
	var like = data.likes;
	console.log(like);
    res.render('chat', {'likes': like});
};