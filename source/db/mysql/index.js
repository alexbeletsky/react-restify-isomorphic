var mysql = require('mysql');

module.exports = function (config) {
	var db;

	var createConnection = function () {
		db = mysql.createPool(config.mysql.connection);

		return {
			pool: db,

			query: function (query, ops, callback) {
				if (typeof ops === 'function') {
					callback = ops;
					ops = [];
				}

				db.getConnection(function (err, connection) {
					if (err) {
						return callback(err);
					}

					connection.query(query, ops, function (err, results) {
						connection.release();
						callback(err, results);
					});
				});
			}
		};
	};

	return createConnection();
};
