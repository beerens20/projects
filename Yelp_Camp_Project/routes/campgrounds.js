var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

router.get("/new", function(req, res){
	res.render("campgrounds/new")
});

router.post("/", function(req, res){
	// get data from from and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};
	// Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			// redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	});
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
	//find campground with provided id
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			//render show template about id
			res.render("campgrounds/show", {campground: foundCampground});
		}
  })
});
  
  module.exports = router;