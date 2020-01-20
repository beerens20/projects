var express 				= require("express"),
	app 					= express(),
	request 				= require("request"),
	bodyParser 				= require("body-parser"),
	mongoose 				= require("mongoose"),
	Campground 				= require("./models/campground"),
	Comment 				= require("./models/comment"),
	User					= require("./models/user"),
	passport				= require("passport"),
	LocalStrategy			= require("passport-local"),
	User					= require("./models/user"),
	methodOverride			= require("method-override"),
	flash					= require("connect-flash"),
	seedDB					= require("./seeds")

var commentRoutes 			= require("./routes/comments"),
	campgroundRoutes 		= require("./routes/campgrounds"),
	indexRoutes				= require("./routes/index")

// seedDB();

mongoose.connect('mongodb://localhost/yelp_camp', {useNewUrlParser:  true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
	console.log("DB connected");
});
app.use(methodOverride("_method"));
app.use(flash());

// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret:"Once again Rusty wins cutest dog!",
	resave: false,
	saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// Link external stylesheets
app.use(express.static(__dirname + "/public"));

// currentUser middleware, makes currentUser available to all routes
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);


// Tell Express to listen for requests (start server)
app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("YelpCamp Server has started!!");
});