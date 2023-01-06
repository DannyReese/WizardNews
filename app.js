const express = require("express");
const app = express();

app.get("/", (req, res) => res.send('wizard newws'));

const PORT = 1337;

app.listen(PORT, () => {
  // app.get("/", (req, res) => res.send("Hello"));
  console.log("hey hey");
});
