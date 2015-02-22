var React = require('react');
var restify = require('restify');
var nunjucks = require('nunjucks');

var App = require('../../public/js/components/app.jsx');

function staticService(app) {
	// server master
	app.get('/', function (req, res, next) {
		req.mongo.availability.find({}, {_id: 1, city: 1, routingSupport: 1}).sort({_id: 1}, function (err, results) {
			next.ifError(err);

			// initial application state
			var state = {cities: results};
			var content = React.renderToString(new App(state));

			nunjucks.render('master.html', {app: '/build/main.js', react: content, state: JSON.stringify(state)}, function (err, body) {
				next.ifError(err);

				res.writeHead(200, {
				  'Content-Length': Buffer.byteLength(body),
				  'Content-Type': 'text/html'
				});

				res.write(body);
				res.end();
			});
		});
	});

	// serve static
	app.get('/.*', auth, restify.serveStatic({
		directory: __dirname + '/../../public',
		default: 'index.html'
	}));
}

module.exports = staticService;