#!/usr/bin/node

const fs = require('fs');
const fInput = process.argv[2];
const wInput = process.argv[3];

fs.writeFile(fInput, wInput, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
