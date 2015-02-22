var redis = require('redis');

module.exports = function (config) {
	return {
		redis: redis,
		client: redis.createClient(config.redis.connection.port, config.redis.connection.host)
	};
};
