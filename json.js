var express = require('express');
var app     = express();
var port    = process.argv[2] || 3000;
var file    = process.argv[3] || './public/text.txt';
var fs      = require('fs');

app.get('/books',function(req,res)
	{
		fs.readFile(file,function(e,data)
		{
			if (e)
			{
				console.log(e);
				return res.sendStatus(500);
				
			}
			try
			{
				res.json(JSON.parse(data));
			}
			catch(e)
			{
				res.sendStatus(500);	
			}
		});
	});

app.listen(port)