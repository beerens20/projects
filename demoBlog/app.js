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
app.get("/", function(req,res){
  res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log(err);
    } else {
      res.render("index", {blogs: blogs});
    }
  });
});




// Tell Express to listen for requests (start server)
app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("demoBlog Server has started!!");
});