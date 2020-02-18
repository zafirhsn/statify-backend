const express = require("express");
const app = express();
const fs = require("fs");

const port = 3000;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res, next)=> {
  res.send("It Works!");
})

var server = app.listen(3000, function() {
  console.log(`Backend server is listening on port ${port}`);
})