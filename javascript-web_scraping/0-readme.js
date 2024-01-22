#!/usr/bin/node

const fs = require('fs');
const fInput = process.argv[2];

fs.readFile(fInput, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
