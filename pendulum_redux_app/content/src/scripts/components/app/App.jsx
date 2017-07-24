import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getTitle, getKeywords, getDescription } from '../helpers/metadataGetters';
import { getRootDomain } from '../helpers/getRootDomain'

//the component here simply extracts metadata from the current browser
//document and puts it into the react-chrome-redux store
//upon mounting.

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		//uses helper functions in metadataGetters to parse document metadata
		const url = document.location.href;
		const rootUrl = getRootDomain(url);
		const title = getTitle(document);
		const description = getDescription(document);
		const keywords = getKeywords(document);
		const info = {
			url,
			rootUrl,
			title,
			description,
			keywords
		};

		//dispatches event along with metadata info object to event/src/reducers/info
		this.props.dispatch({
			type: 'SET_INFO',
			info
		});
	}

	//nothing is rendered using the page content script.
	//content will be delievered in the chrome extension popup,
	//which is activated by clicking the button beside the URL
	render() {
		return null;
	}
}

const mapStateToProps = () => {
	return {};
};


export default connect(mapStateToProps)(App);
