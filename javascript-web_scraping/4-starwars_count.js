#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const targetId = 18;

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    const title = JSON.parse(body).results;
    const numberFilm = title.filter((film) => film.characters.includes(`https://swapi-api.hbtn.io/api/people/${targetId}/`));
    console.log(numberFilm.length);
  }
});
