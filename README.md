# Pendulum-Redux

This is a Google Chrome extension that allows news readers to easily gain access
to different perspectives. When on an article webpage, a reader can click the
Chrome extension popup button to see a list of related articles from different
sources.

APIs used include Webhose.io, which collects JSON data related to new articles,
and Algolia, a database for internal searching of JSON.

##Setup

###For Users:
1. Click on the top menu to the right of the URL bar
2. Click "More Tools"
3. Click "Extensions"
4. Click "Load Unpacked Extensions"
5. Select the folder "pendulum_redux/pendulum_redux_app/build"
6. The extension should be installed! Test it out on popular news sites.

###For Developers:
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
3. After changes are made, run ```gulp``` (or ```gulp --watch```) in the terminal
  * This creates a new "build" folder in pendulum_redux_app
4. Install this as a chrome extension. (See "For Users" above.)
5. When changes are made, click its "Reload" button in the Chrome Extensions list
6. That should be it!

# Data Flow Diagrams

![Pendulum Server](./img/server.png?raw=true "Pendulum Server")
![Pendulum App](./img/app.png?raw=true "Pendulum App")
