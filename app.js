const express = require("express");
 const morgan = require("morgan")
const app = express();


app.get("/", (req, res) => res.send('wizard newws'));

const PORT = 1337;

app.listen(PORT, () => {
});

app.use(morgan('dev'));