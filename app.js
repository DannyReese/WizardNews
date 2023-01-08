const express = require("express");
const morgan = require("morgan");
// const volleyball = require("volleyball");
const postBank = require('./postBank');
const postDetails = require('./views/postDetails');
const postList = require('./views/postList');
const errorPage = require('./views/errorPage')
const html = require("html-template-tag")

const app = express();
const {PORT = 1337} = process.env;

app.use( morgan('dev'), express.static('public'));

app.get("/", (req, res) => {
  const posts = postBank.list();

  res.send(postList(posts));
});



app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);

  if (!post.id) {
    throw new Error("Not Found")
  } else {

    res.send(postDetails(post))
  };
});


app.use((err, req, res, next) => {
  console.error(err.stack)


  res.status(404).send(errorPage())
});



app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

