// const express = require('express'),
// 	  path = require("path"),
// 	  bodyParser = require("body-parser"),
// 	  request = require("request"),
// 	  BoxSDK = require('box-node-sdk'),
// 	  fs = require('fs');

// const app = express();
// var PORT = process.env.PORT || 1226;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// // var sdk = new BoxSDK({  clientID: "4vik07rxtygughusywilpawnvwr48kob",  clientSecret: "8CL9ztMjbGdLDz6uOvgy3ElSj1orPtPK"});
// // var client = sdk.getBasicClient("65wKOSh06weAuaOfUli3OHHwaXvgufHi");




// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "/index.html"));
// });

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });