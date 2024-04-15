
const express = require('express');
const router = require ('./app/router');
require('dotenv').config(); 
const app = express()
const PORT = parseInt(process.env.PORT); 

app.set("view engine", "ejs");
app.set("view", "./app/views");

app.use(express.static('./public'));

app.use(router);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})