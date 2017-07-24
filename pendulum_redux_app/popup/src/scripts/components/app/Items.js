import React from 'react';
import algoliasearch from 'algoliasearch';
import targeter from '../algolia/targeter';
import domains from '../algolia/domains';
const algoliaID = 'AAW1ZYJWOW';
const algoliaPublicKey = '2a5f378d4d475b4ce1c78c8cebee04d6';
var client = algoliasearch( algoliaID, algoliaPublicKey );
import {Preview} from './Preview';


class Items extends React.Component {

	//state begins with an empty array of 'suggestions.' these
	//will be populated by using queries to the algolia database,
	//suggestions are then used to populate Preview items to
	//render in the popup

	constructor( props ) {
		super( props );
		this.state = {
			suggestions: []
		};
	}

	//this uses the ../algolia/domains.js dataset to determine the
	//ideologyScore of the current publication (at the root url). it then uses
	//../algolia/targeter.js to generate an array of queries to be sent to algolia
	//using algolia's client.search.
	componentDidMount() {
		const relevantKeywords = this.props.keywords;
		const ideologyScore = domains[this.props.rootUrl];
		const queries = targeter(relevantKeywords, ideologyScore);
		client.search( queries, this.searchCallback.bind(this) );
	}

	//this is the callback for the algolia query. if the result does not come back
	//undefined, it is pushed to the suggestions array in the component state.
	searchCallback( err, content ) {
		const suggestions = [];
		if ( err ) {
			console.error( err );
			return;
		}
		for ( var i = 0; i < content.results.length; i++ ) {
			if ( content.results[i].hits[0] ) {
				suggestions.push( content.results[i].hits[0] );
			}
		}
		this.setState( { suggestions } );
	}



	//this renders the title and main body of the popup.
	//the suggestions taken from algolia are used to populate an array of Preview
	//components, which contain article snippets, title, image, and link.
	render() {
		return (
			<div>
				<div style={{backgroundColor: '#DC143C', color: 'white'}}>
					<br />
					<h1 style={{display: 'flex', justifyContent: 'center'}}><u>PENDULUM</u></h1>
					<h3 style={{display: 'flex', justifyContent: 'center', paddingBottom: '5px'}}>Diverse stories from a partisan world</h3>
					<br />
				</div>
				{ this.state.suggestions.map(( info, idx ) =>
					<Preview key={ idx } info={ info } />
				) }
			</div>
		);
	}
}


module.exports = {
	Items
};
