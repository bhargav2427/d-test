var express = require("express");
var bodyParser = require("body-parser");
var mongo = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
// var jimp = require('jimp');

var url = "mongodb://admin:password@localhost:27017/";

var app = express();
app.engine("html", require("ejs").renderFile);

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(express.static(path.join(__)))

app.get("/", function (req, res) {
  //   console.log(req);
  res.render(__dirname + "/index.html");
  //   res.render("./index.html");
});

app.post("/", urlencodedParser, (req, res) => {
  //   console.log(req.body.name);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("my-db");
    var myobj = { name: req.body.name, email: req.body.email };
    dbo.collection("users").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  res.send("done");
});

app.listen(3000);
