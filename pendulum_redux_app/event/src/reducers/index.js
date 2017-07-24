import {combineReducers} from 'redux';

import info from './info';

//simple, just one reducer to be 'combined' - the current page info
//if more redux functionality is needed, it would go here.

export default combineReducers({
	info
});
