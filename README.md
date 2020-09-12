# welcome, node-giphy-api
## Installation

    npm install node-oxygen-api --save
For Glitch;

    pnpm install node-oxygen-api --save

## Docs
Write Main File;
 

    const giphyAPI = require('node-giphy-api')
	giphy = new giphyAPI("API_KEY"); // Go to https://developers.giphy.com for api key
	
	giphy.search('thanos').then(res => {
	console.log(res)
	})
	
	giphy.get_id('xUOxeZn47mrdabqDNC').then(res => {
	console.log(res)
	})
	
	giphy.translate('thanos').then(res => {
	console.log(res)
	})
	
	giphy.random('thanos').then(res => { 
	console.log(res)
	})
	
	giphy.trend().then(res => { 
	console.log(res)
	})
	