const express = require("express");
const morgan = require("morgan")
const app = express();


app.get("/", (req, res) => res.send('wizard newws'));

const PORT = 1337;

app.listen(PORT, () => {
<<<<<<< HEAD

=======
>>>>>>> 80b6796ebe3b793590a7a056abcd9dd4ba74bfd4
  console.log("hey hey");
});

app.use(morgan('dev'));