import React from 'react';


//this uses the wehbose JSON information returned from the algolia search
//query to render a preview item for each news article suggestion
//placeholder image is 'shotgunart' if main image does not load
//textbox render first 160 characters

const Preview = ( { info } ) => {
	console.log( info );
	return (
		<div className="innerContainer" style={{display:'flex', background: 'white', border: '1 solid black'}}>
			<div className="imageDiv" style={{display: 'flex', alignItems: 'center'}}>
				{info.thread.main_image === '' || info.thread.site === 'theguardian.com' ?
					(<img src="http://cdn8.openculture.com/wp-content/uploads/2012/09/BurroughsShotgunArt.jpeg" />) : (<img src={info.thread.main_image} />)}
			</div>
			<div className="textBox">
				<div><a href={info.url} target="/blank"><h2 className="fucker">{info.title}</h2></a></div>
				<div><h4 style={{display: 'flex', justifyContent: 'center'}}><a href={'http://'+info.thread.site} target="/blank">{info.thread.site}</a></h4></div>
				<div>{info.text.substring(0, 160)}...</div>
			</div>
		</div>
	);
};

module.exports = {
	Preview
};
