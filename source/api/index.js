module.exports = function (app) {
	require('./health')(app);
	require('./availabilities')(app);
};