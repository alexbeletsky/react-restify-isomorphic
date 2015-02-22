var mongo = require('../db/mongo');

function mongoConnection(config) {
	var connection = mongo(config);

	return function (req, res, next) {
		req.mongo = connection;
		next();
	};
}

module.exports = mongoConnection;