// enable es6 features in node
require("babel/register");

var restify = require('restify');
var nunjucks = require('nunjucks');
var jsx = require('node-jsx');

var config = require('./config');
var middleware = require('./source/middleware');
var logger = require('./source/utils/logger');

var app = restify.createServer();
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3012;

app.use(middleware.mongo(config));
app.use(restify.queryParser());

// applications api
require('./source/api')(app);

// master.html, assets
require('./source/static')(app, restify);

// configurations
nunjucks.configure('./views');
jsx.install();

app.listen(port, function () {
	logger.info('router-switch listening on port ' + port + ' ' + env);
});
