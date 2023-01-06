const express = require("express");
const morgan = require("morgan");
const volleyball = require("volleyball");
const postBank = require('./postBank')

const app = express();


app.get("/", (req, res) => {
  const post = postBank.list()
  const html = ``
  res.send(post)});



  const PORT = 1337;



app.listen(PORT, () => {
  console.log("hey hey");
});

app.use(morgan('dev'));
app.use(volleyball)