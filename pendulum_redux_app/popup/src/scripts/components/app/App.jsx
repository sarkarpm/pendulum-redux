import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Items} from './Items';


//primary app for running React in the popup.

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		//takes current page info from the react-chrome-redux store

		let info = this.props.info;
		let searchKeywords;
		let rootUrl;

		//if info is loaded, the first two keywords are taken.
		//TODO: more complex keyword-finding algorithm

		if (info) {
			searchKeywords = info.keywords.slice().split( ',' ).slice( 0, 2 ).toString();
			rootUrl = info.rootUrl;
		}

		//if not loaded, return placeholder, else, return a list of news Items
		//pulled from algolia using the keywords and ideology algorithm

		if (!searchKeywords || !rootUrl) {
			return (
				<div>
					<h1>Pendulum</h1>
				</div>);
		} else {
			return (
				<div className="outerContainer">
					<Items rootUrl={ rootUrl } keywords={ searchKeywords }  />
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		info: state.info
	};
};

export default connect(mapStateToProps)(App);
