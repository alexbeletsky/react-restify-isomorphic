import React from 'react';
import request from 'superagent';
import Cities from './cities.jsx';

let App = React.createClass({
	getInitialState: function () {
		return {cities: this.props.cities || []};
	},

	fetchAvailabilities: function () {
		var fetched = (resp) => {
			if (resp.ok) {
				this.setState({cities: resp.body});
			}
		};

		request
			.get('/api/availabilities')
			.end(fetched);
	},

	updateRouterSetting: function (id, value) {
		var url = '/api/availabilities/' + id + '/routing';

		var completed = () => {
			this.fetchAvailabilities();
		};

		if (value) {
			request.post(url).end(completed);
		} else {
			request.del(url).end(completed);
		}
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.fetchAvailabilities();
		}
	},

	render: function () {
		return (
			<Cities cities={this.state.cities} updateRouterSetting={this.updateRouterSetting}></Cities>
		);
	}
});

export default App;