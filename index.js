const express = require("express");
const app = express();
const env = require("dotenv").config();
const jwt = require("jsonwebtoken");
// const fs = require("fs");
// const bodyParser = require('body-parser');
// const assert = require("assert");
// const cors = require("cors");
// const LZ = require("lz-string");

const pass = process.env.PASS;
const port = process.env.PORT || 3000;
const frontend_url = process.env.FRONTEND_URL;

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://zafir:${pass}@cluster0-twsfv.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

// ^ Connect to MongoDB
client.connect(err => { 
  if (err) {
    //console.log("Database connection err: ", err);
  }
});

// const SECRET_KEY_LENGTH = 15;

// function generateSecretKey() {
//   let alpha = "abcdefghijklmnopqrstuvwxyz1234567890";
//   let key = "";
//   for (let i = 0; i < SECRET_KEY_LENGTH; i++) {
//     key += alpha[Math.floor(Math.random() * alpha.length)];
//   }
//   return key;
// }
// const secretKey = generateSecretKey();

// ^ Secret Key for JWT
const secretKey = "afsiop28j1jkc!2al";

// ^ Verify token middleware
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined 
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token;
    req.token = bearerToken;
    // Call next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.use(express.json({limit: '50mb'}));
// app.use(cors());

// ^ Set headers on all responses for CORS access
app.use("/", (req, res, next)=> {
  res.set({
    "Access-Control-Allow-Origin": `${frontend_url}`,
    "Access-Control-Allow-Headers":"Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With"
  });
  next();
})


// ^ POST Token route
// Requester can get a token if they send the is and display name of the user, if the user exists, a token is granted. Otherwise, no token
app.post("/token", (req, res, next)=> {
  if (!req.body.length === 2 || !req.body.id || !req.body.display_name) {
    return res.sendStatus(400);
  }
  let user = {
    id: req.body.id,
    dispay_name: req.body.display_name
  }
  const collection = client.db("statify").collection("users");
  collection.findOne({ _id: req.body.id}).then((doc, err)=> {
    if (err) {
      return res.sendStatus(500);
    }
    if (doc) {
      jwt.sign({user}, secretKey, {expiresIn: "1d"}, (err, token)=> {
        return res.send(token);
      })
    } else {
      return res.sendStatus(403);
    }
  })
})

// app.get("/testtoken", verifyToken, (req, res, next)=>{
//   jwt.verify(req.token, secretKey, (err, authData)=> {
//     if (err) {
//       return res.sendStatus(403);
//     } else {
//       res.send(authData)
//     }
//   })
// })

// ^ GET Current User Profile and Data
// Use JWT to protect route
app.get("/me", verifyToken, (req, res, next)=> {
  //console.log(`GET /me/${req.params.id}`);
  jwt.verify(req.token, secretKey, (err, authData)=> {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.sendStatus(401);
      }
      else {
        return res.sendStatus(403);
      }
    }

    const collection = client.db("statify").collection("users");
    collection.findOne({_id: authData.user.id}).then((doc, err)=> {
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

  })

});

// ^ GET a user's profile and data
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

// ^ POST Store a user in the database
app.post("/storeuser", (req, res, next)=> {
  // console.log("POST /storeuser");
  let numparams = 3;


  if (Object.keys(req.body).length !== numparams || !req.body.profile || !req.body.id || !req.body.data) {
    return res.sendStatus(400);
  }

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

// ^ POST Set share permissions for a user
// Uses JWT to protect route
app.post("/setshare", verifyToken, (req, res, next)=> {
  // console.log("SET SHARE");
  jwt.verify(req.token, secretKey, (err, authData)=> {
    if (err) {
      if (err.name === "TokenExpiredError") {
        // console.log("SET SHARE TOKEN EXPIRED");
        return res.sendStatus(401);
      }
      else {
        return res.sendStatus(403);
      }
    }
    // console.log("SET SHARE TOKEN VALID")
    if (!req.body.id || !req.body.hasOwnProperty("share")) {
      return res.sendStatus(400);
    }

    const collection = client.db("statify").collection("users");
    collection.updateOne({ _id: req.body.id}, {$set: {share: req.body.share}}, (err, resultDoc)=> {
      if (err) {
        return res.sendStatus(500);
      } else {
        return res.sendStatus(200);
      }
    })
  })
})

// ^ GET Share permissions for a user
// Uses JWT to protect route
app.get("/getshare", verifyToken, (req, res, next)=> {
  // console.log("GET SHARE");
  jwt.verify(req.token, secretKey, (err, authData)=> {
    if (err) {
      if (err.name === "TokenExpiredError") {
        // console.log("GET SHARE TOKEN EXPIRED");
        return res.sendStatus(401);
      }
      else {
        return res.sendStatus(403);
      }
    }
    // console.log("GETSHARE TOKEN VALID");
    const collection = client.db("statify").collection("users");
    collection.findOne({_id: authData.user.id}).then((doc, err)=> {
      if (err) {
        return res.sendStatus(500);
      } else {
        return res.send(doc.share);
      }
    })
  })
})


var server = app.listen(port, function() {
  console.log(`Backend server is listening on port ${port}`);
})
