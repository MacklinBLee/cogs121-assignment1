var data1 = require('../data.json');

exports.data = function(req, res) {
	res.json(data1);
}