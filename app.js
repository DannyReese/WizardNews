const express = require("express");
const morgan = require("morgan");
const volleyball = require("volleyball");
const postBank = require('./postBank');
const postDetails = require('./views/postDetails')
const postList = require('./views/postList')

const app = express();

app.use(morgan('dev'), volleyball, express.static('public'));

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
  const html = ` 
  <!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><img src="/logo.png"/>Wizard News</header>
      <h2>Wrong Path I Will Eat Your Face NOMNONLOM 404</h2>
    </body>
  </html>`

  res.status(404).send(html)
});

const {PORT = 1337} = process.env;

app.listen(PORT, () => {
  console.log("hey hey");
});

