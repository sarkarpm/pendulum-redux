
//inital state is all empty strings, for when the page is loading

const initialState = {
	url: '',
	rootUrl: '',
	title: '',
	description: '',
	keywords: ''
};


//when on a new page, a SET_INFO event is dispatched from the content.js App.jsx
//along with the page info. this new state is sent to the store.

export default (state = initialState, {type, info}) => {
	switch (type) {
	case 'SET_INFO':
		return info;
	default:
		return state;
	}
};
