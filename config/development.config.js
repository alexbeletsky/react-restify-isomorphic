var config = {
	mongo: {
		connection: 'mongodb://localhost:27017'
	},

	mysql: {
		connection: {
			host: 'localhost',
			user: 'user',
			password: 'password',
			database: 'db'
		}
	},

	redis: {
		connection: {
			host: 'localhost',
			port: 6379
		}
	},

	logentries: {
		token: null
	}
};

module.exports = config;
