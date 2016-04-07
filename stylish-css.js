var port    = process.argv[2];
var express = require('express');
var app     = express();
var dir     = process.argv[3];
var stylus  = require('stylus');
app.use(stylus.middleware(dir|| 'public'));
app.use(express.static(dir || 'public'));

app.listen(port || 3000);