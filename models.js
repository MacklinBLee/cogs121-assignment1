var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    "twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photo": [ {"value": String } ],
});

exports.User = mongoose.model("User", UserSchema);

var MessageSchema = new mongoose.Schema({
  "username": String,
  "photo": [ {"value": String } ],
  "comment": String,
  "rating": String,
  "posted": Date
});

exports.Message = mongoose.model("Message", MessageSchema);