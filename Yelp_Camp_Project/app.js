var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

var campgrounds = [
	{ name: "Salmon Creek", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
	{ name: "Granite Hill", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
	{ name: "Mountain Goat Rest", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
	{ name: "Salmon Creek", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
	{ name: "Granite Hill", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
	{ name: "Mountain Goat Rest", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("landing");
});

app.get("/campgrounds", function (req, res) {
	res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs")
});

app.post("/campgrounds", function(req, res){
	// get data from from and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect("campgrounds");
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("YelpCamp Server has started!!");
});