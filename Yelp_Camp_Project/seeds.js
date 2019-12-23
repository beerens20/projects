var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
  {
    name: "Clouds Rest",
    image: "https://placeimg.com/300/300/nature",
    description: "Blah blah blah"
  },
  {
    name: "Desert Mesa",
    image: "https://placeimg.com/300/300/nature",
    description: "Blah blah blah"
  },
  {
    name: "Canyon Floor",
    image: "https://placeimg.com/300/300/nature",
    description: "Blah blah blah"
  }
]

  function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
      if(err){
        console.log(err);
      } else
      console.log("Removed Campgrounds");
      //add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err){
            console.log(err);
          } else {
            console.log("Created a campground");
            //create a comment
            Comment.create(
              {
                text: "This place is great but I wish there was internet",
                author: "Homer"
              }, function(err, comment){
                if(err){
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment");
                };
              })
          };
        });
      });
    });
    
    //add a few comments

  }

  module.exports = seedDB;