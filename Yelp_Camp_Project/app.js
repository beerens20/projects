var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.send("Testing nodemon");
});

app.get("/images", function (req, res) {
	request('https://jsonplaceholder.typicode.com/photos/1', function (error, response, body) {
		if (!error && response.statusCode === 200) {
			var parsedData = JSON.parse(body);
			res.send(parsedData.title);
		}
	})
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("Movie App has started!!");
});