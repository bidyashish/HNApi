const express = require('express')
const app = express()
const port = 3000


app.get('/', function(req, res){
	res.type('application/json');
	res.send(JSON.stringify({
		name: 'hnapi',
		desc: 'Hacker News API Unofficial (minimal)',
		version: '1.0.0',
		project_url: 'https://github.com/bidyashish/HNApi',
		documentation_url: 'https://github.com/bidyashish/HNApi',
		author: 'bidyashish',
		author_url: 'http://bidyashish.github.io/'
	}, null, 4));
});






app.listen(port, () => console.log(`App listening on port ${port}!`))



