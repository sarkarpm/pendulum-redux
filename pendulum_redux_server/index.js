const webhoseio = require( 'webhoseio' );
const algoliasearch = require( 'algoliasearch' );
var algoliaClient = algoliasearch( process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SECRET_KEY);
const webhoseClient = webhoseio.config( { token: process.env.WEBHOSE_PUBLIC_KEY } );
const { domains } = require( './domains' );

let domainIdx = 0;


//recursively queries webhose while content is still avaiable, since only
//100 items are returned at a time. then pushes the result to the
//appropriate algolia index

const nextResponse = ( index ) => {
    let values;
    webhoseClient.getNext()
        .then( output => {
            values = output;
            index.addObjects( output.posts, ( err, content ) => { } );
        } )
        .then(() => {
            if ( values.moreResultsAvailable > 0 ) {
                nextResponse( index );
            } else if ( domainIdx < domains.length ) {
                domainIdx++;
                nextDomain();
            }
        } );
}

const nextDomain = () => {
    const search = {
        site: domains[domainIdx],
        is_first: true,
				language: 'english'
    }

    var index = algoliaClient.initIndex( domains[domainIdx] );
    let values;

    webhoseClient.query( 'filterWebContent', search )
        .then( output => {
            values = output;
            index.addObjects( output.posts, ( err, content ) => { } );
        } )
        .then(() => {
            if ( values.moreResultsAvailable > 0 ) {
                nextResponse( index );
            } else if ( domainIdx < domains.length ) {
                domainIdx++;
                nextDomain();
            }
        } );
}

nextDomain();
console.log( 'Search Complete' );
