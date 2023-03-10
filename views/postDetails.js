const html = require("html-template-tag")

const postDetails = (post)=>{
    return(html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png"/><a href="/">Wizard News</a></header>
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
    )
}

module.exports = postDetails