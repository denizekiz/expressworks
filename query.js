var port       = process.argv[2];
var express    = require('express');
var app        = express();

app.get('/search',function(req,res)
	{
		res.send(req.query);
	});

app.listen(port || 3000);