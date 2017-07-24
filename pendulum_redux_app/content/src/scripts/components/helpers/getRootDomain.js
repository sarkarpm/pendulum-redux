
//these are used to parse the current url into
//the simple root domain name
//(http://www.nytimes.com/something/something/ --> nytimes.com)


function extractHostname( url ) {
	var hostname;
	//find & remove protocol (http, ftp, etc.) and get hostname
	if ( url.indexOf( '://' ) > -1 ) {
		hostname = url.split( '/' )[2];
	}
	else {
		hostname = url.split( '/' )[0];
	}

	//find & remove port number
	hostname = hostname.split( ':' )[0];
	//find & remove "?"
	hostname = hostname.split( '?' )[0];

	return hostname;
}

function getRootDomain( url ) {
	var domain = extractHostname( url ),
		splitArr = domain.split( '.' ),
		arrLen = splitArr.length;

		//extracting the root domain here
	if ( arrLen > 2 ) {
		domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
	}
	return domain;
}

module.exports = {
	getRootDomain
};
