var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    "twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photo": String
});

exports.User = mongoose.model("User", UserSchema);

var MessageSchema = new mongoose.Schema({
  "fullname": String,
  "food": String,
  "rating": String
});

exports.Message = mongoose.model("Message", MessageSchema);