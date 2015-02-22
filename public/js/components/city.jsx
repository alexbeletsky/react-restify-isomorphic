import React from 'react';

let City = React.createClass({
	toogleRouter: function (e) {
		this.props.onRouterToggled(e.target.id, e.target.checked);
	},

	render: function () {
		return (
			<li>
				<span className="city">{this.props.city}</span>
				<input
					type="checkbox"
					id={this.props.itemId}
					checked={this.props.routingSupport}
					onChange={this.toogleRouter}
					className="tgl tgl-light" />
				<label className="tgl-btn" htmlFor={this.props.itemId}></label>
			</li>
		);
	}
});

export default City;