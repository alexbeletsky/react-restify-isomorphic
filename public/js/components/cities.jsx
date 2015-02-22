import React from 'react';
import City from './city.jsx';

let Cities = React.createClass({
	onRouterToggled: function (id, value) {
		this.props.updateRouterSetting(id, value);
	},

	render: function () {
		var createCity = (item) => {
			return (
				<City
					key={item._id}
					itemId={item._id}
					city={item.city}
					routingSupport={item.routingSupport}
					onRouterToggled={this.onRouterToggled}>
				</City>
			);
		};

		return (
			<ul className="cities">
				{this.props.cities.map(createCity)}
			</ul>
		);
	}
});

export default Cities;