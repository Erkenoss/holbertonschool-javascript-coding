#!/usr/bin/node

const request = require('request');
const titleId = process.argv[2];

request('https://swapi-api.hbtn.io/api/films/' + titleId, (err, response, body) => {
  if (!err && response.statusCode === 200) {
    const title = JSON.parse(body);
    console.log(title.title);
  }
});
