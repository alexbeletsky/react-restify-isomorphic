import React from 'react';
import App from './components/app.jsx';

var cities = window.__app_state.cities;

React.render(<App cities={cities}></App>, window.document.getElementById('app'));