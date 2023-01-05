const express = require("express");
const app = express();

app.get("/", (req, res) => res.send('yo betch'));

const PORT = 1337;

app.listen(PORT, () => {
  // app.get("/", (req, res) => res.send("Hello"));
  console.log("hey hey");
});
