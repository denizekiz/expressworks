var port       = process.argv[2];
var express    = require('express');
var app        = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended : false}));

app.post('/form',function(req,res)
	{
		var input = req.body.str.split('').reverse().join(''); // reverse string
		res.end(input.toString());
	});

app.listen(port);