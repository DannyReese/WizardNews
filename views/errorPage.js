const html = require("html-template-tag")

const errorPage = ()=>{
    return(html` 
<!DOCTYPE html>
<html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <header><img src="/logo.png"/>Wizard News</header>
    <h2>Sorry page not found 404</h2>
  </body>
</html>`
    )
}

module.exports = errorPage