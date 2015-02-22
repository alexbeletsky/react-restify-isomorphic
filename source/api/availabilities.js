function availabilitiesService(app) {
	app.get('/api/availabilities', function (req, res, next) {
		req.mongo.availability.find({}, {_id: 1, city: 1, routingSupport: 1}).sort({_id: 1}, function (err, results) {
			next.ifError(err);

			res.send(results);
		});
	});

	app.post('/api/availabilities/:id/routing', function (req, res, next) {
		var id = new req.mongo.ObjectId(req.params.id);

		req.mongo.availability.findAndModify({
			query: {_id: id},
			update: {$set: {routingSupport: true}}
		}, function (err) {
			next.ifError(err);

			res.send({});
		});
	});

	app.del('/api/availabilities/:id/routing', function (req, res, next) {
		var id = new req.mongo.ObjectId(req.params.id);

		req.mongo.availability.findAndModify({
			query: {_id: id},
			update: {$set: {routingSupport: false}}
		}, function (err) {
			next.ifError(err);

			res.send({});
		});
	});
}

module.exports = availabilitiesService;