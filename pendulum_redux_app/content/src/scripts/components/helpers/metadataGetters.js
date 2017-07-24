
//metadata helper functions - traverses through the document
//dom's meta tags to find ones with the specified attribute
//and return it's 'content' attribute

function getMetadata( name, doc ) {
	var metas = doc.getElementsByTagName( 'meta' );
	for ( var i = 0; i < metas.length; i++ ) {
		if ( metas[i].getAttribute( 'name' ) === name ) {
			return metas[i].getAttribute( 'content' );
		}
	}
	return '';
}

function getMetadataOG( property, doc ) {
	var metas = doc.getElementsByTagName( 'meta' );
	for ( var i = 0; i < metas.length; i++ ) {
		if ( metas[i].getAttribute( 'property' ) === property ) {
			return metas[i].getAttribute( 'content' );
		}
	}
	return '';
}

//functions to get desired properties: title, keywords, and description
function getTitle(doc) {
	return getMetadata( 'title', doc ) ||
					getMetadataOG( 'og:title', doc ) ||
					doc.getElementsByTagName( 'title' );
}

function getKeywords(doc) {
	return getMetadata( 'news_keywords', doc ) ||
					getMetadata( 'keywords', doc ) ||
					getMetadataOG( 'keywords', doc );
}

function getDescription(doc) {
	return getMetadata( 'description', doc );
}

module.exports = {
	getTitle,
	getKeywords,
	getDescription
};
