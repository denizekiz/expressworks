var port    = process.argv[2];
var file    = process.argv[3];
var express = require('express');
var app     = express();
var path = require('path');

app.use(express.static( file ));
app.listen(port);