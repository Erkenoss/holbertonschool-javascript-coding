#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    const bod = JSON.parse(body);
    const todos = {};
    for (const todo of bod) {
      if (todo.completed) {
        const userId = todo.userId;
        if (!todos[userId]) {
          todos[userId] = 0;
        }
        todos[userId] += 1;
      }
    }
    console.log(todos);
  }
});
