var express = require("express");
var app = express();
var request = require("request");


app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("landing");
});

app.get("/campgrounds", function (req, res) {
	var campgrounds = [
		{ name: "Salmon Creek", image: "http://www.place-puppy.com/200x200" },
		{ name: "Granite Hill", image: "http://www.place-puppy.com/200x200" },
		{ name: "Mountain Goat Rest", image: "http://www.place-puppy.com/200x200" }

	];
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("YelpCamp Server has started!!");
});