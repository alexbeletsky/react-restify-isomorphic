var mongo = require('mongojs');

module.exports = function (config) {
	var collections = ['currentLocations', 'availability'];
	var db = mongo.connect(config.mongo.connection, collections);
	if (!db) {
		throw new Error('could not connect to mongo db, check your connection');
	}

	return db;
};
