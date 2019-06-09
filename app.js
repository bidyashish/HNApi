const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

const getMaxUrl = 'https://hacker-news.firebaseio.com/v0/maxitem.json';
const getitemUrl = 'https://hacker-news.firebaseio.com/v0/item/';



app.get('/', function (req, res) {
	res.type('application/json');
	res.status(200).send(JSON.stringify({
		name: 'hnapi',
		desc: 'Hacker News API Unofficial (minimal)',
		version: '1.0.0',
		project_url: 'https://github.com/bidyashish/HNApi',
		documentation_url: 'https://github.com/bidyashish/HNApi',
		author: 'bidyashish',
		author_url: 'http://bidyashish.github.io/',
		demo_Url: '/list'
	}, null, 4));
});



app.get('/max', function (req, res) {
	res.type('application/json');


	fetch(getMaxUrl)
		.then(response => response.json())
		.then(data => {

			res.status(200).send(JSON.stringify({
				data
			}, null, 4));
		})
		.catch(err => {
			console.log('Error Fetching Api from Firebase')
		})

})

app.get('/list', function (req, res) {
	res.type('application/json');

	async function getItem () {
		const response = await fetch(getitemUrl+77+`.json`);
		const json = await response.json();

		res.send (json);
	}
	getItem();


})

app.get('/all', function (req, res) {
	res.type('application/json');

	async function getItem () {
		const response = await fetch(getitemUrl+77+`.json`);
		const json = await response.json();

		res.send (json);
	}
	getItem();


})





app.listen(port, () => console.log(`App listening on port ${port}!`))



