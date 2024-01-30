const express = require('express');

const app = express();
const port = 1245;

app.get("/", function (req, res) {
    res.send("Hello Holberton School!\n");
  });

  app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}/!`);
  });
