export default function (app) {
	require('./health')(app);
	require('./availabilities')(app);
}