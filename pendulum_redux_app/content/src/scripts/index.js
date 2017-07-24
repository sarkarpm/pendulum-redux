import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/app/App';

const proxyStore = new Store({portName: 'example'});

const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

//this uses the Store from react-chrome-redux in order to connect the
//content script to the popup script.
//that way, the popup can use the page metadata
//when querying the algolia server.

render(
	<Provider store={proxyStore}>
		<App/>
	</Provider>
	, document.getElementById('rcr-anchor'));
