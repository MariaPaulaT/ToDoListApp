//jshint esversion: 6


const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({encoded:true}));

app.get("/", function(req, res){
    app.send("hello");
});
app.listen(3000, function(){
    console.log("server");

})