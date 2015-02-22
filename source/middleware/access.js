var config = require('../../config');

module.exports = function () {
	return function (req, res, next) {
		console.log(req.query.accessToken);

		if (!req.query.accessToken || req.query.accessToken !== config.auth.token) {
			res.status(401);
		}

		next();
	};
};