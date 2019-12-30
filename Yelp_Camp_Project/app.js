var express 		= require("express"),
		app 				= express(),
		request 		= require("request"),
		bodyParser 	= require("body-parser"),
		mongoose 		= require("mongoose"),
		Campground 	= require("./models/campground"),
		Comment 		= require("./models/comment"),
		User				= require("./models/user"),
		seedDB			= require("./seeds")

seedDB();


mongoose.connect('mongodb://localhost/yelp_camp', {useNewUrlParser:  true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
	console.log("DB connected");
});

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
			res.render("campgrounds/index", {campgrounds: allCampgrounds})
		}
	});
	// res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function(req, res){
	res.render("campgrounds/new")
});

app.post("/campgrounds", function(req, res){
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
app.get("/campgrounds/:id", function(req, res){
	//find campground with provided id
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			//render show template about id
			res.render("campgrounds/show", {campground: foundCampground});
		}
	})

	// ================================
	// COMMENTS ROUTES
	// ================================
	app.get("/campgrounds/:id/comments/new", function(req, res){
		// find campground by id
		Campground.findById(req.params.id, function(err, campground){
			if(err){
				console.log(err);
			} else {
				res.render("comments/new", {campground: campground});
			}
		});
	});

	app.post("/campgrounds/:id/comments", function(req, res){
		// lookup campground using id
		Campground.findById(req.params.id, function(err, campground){
			if(err){
				console.log(err);
				res.redirect("/campgrounds");
			} else {
				// create new comment
				Comment.create(req.body.comment, function(err, comment){
					if(err){
						console.log(err);
					} else {
						// connect new comment to campground
						campground.comments.push(comment);
						campground.save();
						// redirect to campground show page
						res.redirect(`/campgrounds/${campground._id}`);
					}
				});
			}
		});
	});
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("YelpCamp Server has started!!");
});