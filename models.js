var Mongoose = require('mongoose');

var UserSchema = new Mongoose.Schema({
	"twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photo": String
});

var NewsFeedSchema = new Mongoose.Schema({
	"user": String,
	"userPhoto": String,
	"message": String,
	"posted": Date
});

exports.User = Mongoose.model('User', UserSchema);
exports.NewsFeed = Mongoose.model('NewsFeed', NewsFeedSchema);