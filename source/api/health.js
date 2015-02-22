var pack = require('../../package');

function healthService(app) {
	app.get('/health', function (req, res, next) {
		res.send({
			app: pack.name,
			env: process.env.NODE_ENV || 'development',
			version: pack.version
		});
	});
}

module.exports = healthService;