var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/yelp_camp', {useNewUrlParser:  true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
	console.log("DB connected");
});

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{ 
// 		name: "Granite Hill",
// 		image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// 	},  function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("Newly created campground: ");
// 			console.log(campground);
// 		}
// 	});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("landing");
});

app.get("/campgrounds", function (req, res) {
	// Get all campground from DB
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("campgrounds", {campgrounds: allCampgrounds})
		}
	});
	// res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs")
});

app.post("/campgrounds", function(req, res){
	// get data from from and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	// Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			// redirect back to campgrounds page
			res.redirect("campgrounds");
		}
	});

});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("YelpCamp Server has started!!");
});