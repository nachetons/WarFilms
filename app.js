const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const path    = require("path");
const express = require('express');
const app = new express();

app.use(express.static("todo"));


     
app.listen(port);

console.log("Running at Port 3000");


