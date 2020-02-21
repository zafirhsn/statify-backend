const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
const assert = require("assert");
const cors = require("cors");
const pass = require("./config");


const port = 3000;


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://zafir:${pass}@cluster0-twsfv.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true} );

client.connect(err => { 
  if (err) {
    console.log("Database connection err: ", err);
  }
});

app.use(express.json());
app.use(cors());

app.post("/", (req, res, next)=> {
  console.log("Recieved a post request")

  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.send("This is a post");
})

app.get("/me", (req, res, next)=> {
  console.log(`GET /me/${req.params.id}`);
  const collection = client.db("statify").collection("users");
  collection.find({_id: req.params.id}).toArray((err, docs)=>{
    if (err) {
      console.log("Database transaction err: ", err);
      res.sendStatus(500);
    }
    else if (docs.length) {
      res.send(docs);
    }
    else {
      res.sendStatus(404);
    }
  })
});

app.get("/getuser/:id", (req, res, next)=> {
  console.log(`GET /getuser/${req.params.id}`)
  console.log(req.params.id);

  const collection = client.db("statify").collection("data");
  let cursor = collection.find({_id: req.params.id}).toArray((err, docs)=> {
    if (docs.length) {
      if (docs[0].share) {
        res.send(docs);
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(404);
    } 
  })
})


app.post("/storeuser", (req, res, next)=> {
  console.log("POST /storeuser", req.body);

  const collection = client.db("statify").collection("users");
  collection.updateOne({_id: req.body.id}, {$set: {_id: req.body.id, [req.body.id]: req.body}}, {upsert: true}, (err, resultdoc)=> {
    if (err) {
      console.log("Database transaction err: ", err)
      res.sendStatus(500);
    } else {
      // console.log(resultdoc);
      // assert.strictEqual(r.insertedId, req.body.id);
      console.log("Document was succesfully inserted");
      res.sendStatus(200);
    }
  })



});

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/', (req, res, next)=> {
  res.send("It Works!");
})


var server = app.listen(3000, function() {
  console.log(`Backend server is listening on port ${port}`);
})
