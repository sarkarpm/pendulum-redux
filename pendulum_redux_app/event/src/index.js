import {createStore} from 'redux';
import rootReducer from './reducers';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(rootReducer, {});

//react-chrome-redux wrapper

wrapStore(store, {
	portName: 'example'
});
