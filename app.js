const express = require("express");
const morgan = require("morgan");
const volleyball = require("volleyball");
const postBank = require('./postBank');

const app = express();

app.use(morgan('dev'), volleyball, express.static('public'));



app.get("/", (req, res) => {
  const posts = postBank.list()
  const html = `
<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href="/posts/${post.id}">${post.title}</a>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
  ).join('')}
    </div>
  </body>
</html>`

  res.send(html)
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  
  if(!post.id){
    throw new Error("Not Found")
  }else{
  const html = `
   <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
  <div class="news-list">
  <header><img src="/logo.png"/>Wizard News</header>
  <div class='news-item'>
  <p>
   
    ${post.title}
    <small>(by ${post.name})</small>
    </p>
    <p>${post.content}</p>
    </div>
    </body>
    </html>
  `
  res.send(html)
  }


})

app.use((err, req, res, next) => {
  console.error(err.stack)
  const html = ` 
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
})

const PORT = 1337;



app.listen(PORT, () => {
  console.log("hey hey");
});

