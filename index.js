const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
const assert = require("assert");
const cors = require("cors");


const port = 3000;


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://zafir:Jackawahoo1!@cluster0-twsfv.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true} );

app.use(express.json());
app.use(cors());


app.get("/:id", (req, res, next)=> {
  
})


app.post("/", (req, res, next)=> {
  console.log("Recieved a post request")
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    const db = client.db("test");

    db.collection("testcol").insertOne({a:100}, (err, r)=> {
      console.log("inserted data")
      client.close();
    })
  });
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.send("This is a post");
})

app.post("/storeuser", (req, res, next)=> {
  console.log("POST /storeuser", req.body);
  client.connect(err => {
    if (err) {
      console.log("Database connection err: ", err);
      res.sendStatus(500);
    }
    const collection = client.db("statify").collection("users");;
    collection.updateOne({_id: req.body.id}, {$set: {_id: req.body.id, [req.body.id]: req.body}}, {upsert: true}, (err, resultdoc)=> {
      if (err) {
        console.log("Database transaction err: ", err)
        res.sendStatus(500);
      } else {
        // console.log(resultdoc);
        // assert.strictEqual(r.insertedId, req.body.id);
        console.log("Document was succesfully inserted");
        res.sendStatus(200);
        client.close()
      }
    })
  });


});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res, next)=> {
  res.send("It Works!");
})


var server = app.listen(3000, function() {
  console.log(`Backend server is listening on port ${port}`);
})
