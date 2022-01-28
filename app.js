const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(5500, () => {
    console.log("Server is listening in port: 5500");
});
