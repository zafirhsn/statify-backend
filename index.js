const express = require("express");
const app = express();
// const fs = require("fs");
// const bodyParser = require('body-parser');
// const assert = require("assert");
// const cors = require("cors");
const pass = require("./config");
// const LZ = require("lz-string");
const env = require("dotenv");

// TODO: Figure out how port will change on heroku
const port = 3000;
let frontend_url;

//console.log(process.env.FRONTEND_URL);

if (process.env.NODE_ENV === "development") {
  frontend_url = "http://localhost:8080"
} else {
  frontend_url = "http//localhost:8081"
}
//console.log(frontend_url)

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://zafir:${pass}@cluster0-twsfv.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true} );

client.connect(err => { 
  if (err) {
    //console.log("Database connection err: ", err);
  }
});

app.use(express.json({limit: '50mb'}));
// app.use(cors());

app.use("/", (req, res, next)=> {
  res.set({
    "Access-Control-Allow-Origin": `${frontend_url}`,
    "Access-Control-Allow-Headers":"Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With"
  });

  next();
})

// TODO: Add JWT to routes 
app.get("/me/:id", (req, res, next)=> {
  //console.log(`GET /me/${req.params.id}`);
  const collection = client.db("statify").collection("users");
  collection.findOne({_id: req.params.id}).then((doc, err)=> {
    if (err) {
      //console.log(err);
      return res.sendStatus(500);
    }
    if (doc) {
      return res.send(doc);
    } else {
      return res.sendStatus(404);
    }

  })
});

app.get("/getuser/:id", (req, res, next)=> {
  //console.log(`GET /getuser/${req.params.id}`)

  const collection = client.db("statify").collection("users");
  collection.findOne({_id: req.params.id}).then((doc, err)=> {
    if (err) {
      //console.log(err);
      return res.sendStatus(500);
    }
    if (doc) {
      if (doc.share) {
        delete doc.profile["email"];
        return res.send(doc);
      } else {
        return res.sendStatus(401);
      }
    } else {
      return res.sendStatus(404);
    }

  })
})


app.post("/storeuser", (req, res, next)=> {
  //console.log("POST /storeuser");
  let numparams = 3;

  // //console.log(req.body);

  if (Object.keys(req.body).length !== numparams || !req.body.profile || !req.body.id || !req.body.data) {
    return res.sendStatus(400);
  }

  // //console.log(typeof req.body.id)
  const collection = client.db("statify").collection("users");
  collection.updateOne({_id: req.body.id}, {$set: {_id: req.body.id, profile: req.body.profile, data: req.body.data}}, {upsert: true}, (err, resultdoc)=> {
    if (err) {
      //console.log("Database transaction err: ", err)
      return res.sendStatus(500);
    } 

    if (resultdoc.upsertedId && resultdoc.upsertedId._id === req.body.id) {
      collection.updateOne({_id: req.body.id}, {$set: {share: false}}, {upsert: true}, (err, resultdoc)=> {
        if (err) {
          //console.log("Database transaction err when adding 'share' field: ", err);
          return res.sendStatus(500);
        }
        else { 
          //console.log("A new user was succesfully inserted");
          return res.sendStatus(200);
        }
      })
    }
    else {
      //console.log("A user was successfully updated");
      return res.sendStatus(200);
    }
  })
});


var server = app.listen(3000, function() {
  //console.log(`Backend server is listening on port ${port}`);
})
