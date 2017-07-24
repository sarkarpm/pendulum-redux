# Pendulum-Redux

This is a Google Chrome extension that allows readers to easily gain access
to news from different perspectives. When on a news article webpage, users can
click the Chrome extension popup button to see a list of related articles from
ideologically different sources.

APIs used include Webhose.io, which collects JSON data related to new articles,
and Algolia, a database for internal searching of JSON.

## Setup

### For Users:
1. Click on the top menu to the right of the URL bar
2. Click "More Tools"
3. Click "Extensions"
4. Click "Load Unpacked Extensions"
5. Select this folder: "pendulum_redux/pendulum_redux_app/build"
6. The extension should be installed! Test it out on popular news sites.

### For Developers:
#### Setting up the server, webhose, and Algolia database
1. Register for algolia.com and webhose.io accounts
2. Your env.sh will need the following:
    * WEBHOSE_PUBLIC_KEY
	* ALGOLIA_PUBLIC_KEY
	* ALGOLIA_SECRET_KEY
	* ALGOLIA_APP_ID
3. (optional) Alter the 'pendulum_redux_server/domains.js'
4. Run ```npm install``` and ```npm start```
5. Check your Algolia database. It should be populated with new indices!

#### Editing the extension app
1. Install ```gulp``` (http://gulpjs.com/)
2. Run ```npm install```
3. Change the ALGOLIA_APP_ID and ALGOLIA_PUBLIC_KEY in popup/src/scripts/components/app/Items.js
4. After changes are made, run ```gulp``` (or ```gulp --watch```) in the terminal
  * This creates a new "build" folder in pendulum_redux_app
5. Install this as a chrome extension. (See "For Users" above.)
6. When changes are made, click the extension's "Reload" button in the Chrome Extensions list
7. That should be it!

# Currently Supported News Sources
"cnn.com", "breitbart.com", "nationalreview.com", "wsj.com", "newyorker.com", "washingtonpost.com", "salon.com", "theguardian.com", "foxnews.com", "motherjones.com", "townhall.com", "huffingtonpost.com", "bloomberg.com", "thenation.com", "fivethirtyeight.com", "nytimes.com", "theblaze.com", "reason.com", "thehill.com"

# Data Flow Diagrams

![Sample Image](./img/sample.png?raw=true "Sample Usage")
![Pendulum Server](./img/server.png?raw=true "Pendulum Server")
![Pendulum App](./img/app.png?raw=true "Pendulum App")
