import React from 'react';
import ReactDom from 'react-dom';
import Basic from '../routes/index.js';
import { Provider } from 'react-redux';
import configureStore from '../redux/store.js';
import todo from '../redux/reducer.js'

let store = configureStore();


ReactDom.render(
	<Provider store={store}>
		<Basic />
	</Provider>,
	document.getElementById('app'));