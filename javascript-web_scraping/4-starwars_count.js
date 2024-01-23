#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const targetId = 18;
let count = 0;

request.get(url, function (err, response, body) {
  if (err) {
    console.log('error:', err);
  } else {
    const title = JSON.parse(body).results;
    for (const result of title) {
      for (const character of result.characters) {
        if (character.includes(targetId)) {
          count += 1;
        }
      }
    }
  }
  console.log(count);
});
