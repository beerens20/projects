var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app"); //establishes mongo database for project
app.set("view engine", "ejs"); //enables easy usage of .ejs files
app.use(express.static("public")); //sets public folder for serving app assets like CSS
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now} //sets created to be a type:date and to default to the current date when post is created
});
var Blog = mongoose.model("Blog", blogSchema);


//RESTFUL ROUTES

//ROOT ROUTE
app.get("/", function(req,res){
  res.redirect("/blogs");
});

//INDEX ROUTE
app.get("/blogs", function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log(err);
    } else {
      res.render("index", {blogs: blogs});
    }
  });
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
  res.render("new");
})

//CREATE ROUTE
app.post("/blogs", function(req, res){
  //create blog
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render("new");
    } else {
      //redirect to the index
      res.redirect("/blogs");
    }
  });
  
});



// Tell Express to listen for requests (start server)
app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("demoBlog Server has started!!");
});