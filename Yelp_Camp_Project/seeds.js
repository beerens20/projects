var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
  {
    name: "Clouds Rest",
    image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?cs=srgb&dl=adventure-camping-grass-1687845.jpg&fm=jpg",
    description: "Spicy jalapeno bacon ipsum dolor amet ex in meatball exercitation, venison landjaeger corned beef. Cupidatat chislic corned beef minim ribeye irure in biltong. Frankfurter tail ball tip turducken, pastrami nulla aliquip rump id pork chop. Doner turkey sausage elit. Ipsum kielbasa sirloin, et ham hock meatloaf exercitation filet mignon mollit pariatur."
  },
  {
    name: "Desert Mesa",
    image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?cs=srgb&dl=bonfire-surrounded-with-green-grass-field-1061640.jpg&fm=jpg",
    description: "Spicy jalapeno bacon ipsum dolor amet ex in meatball exercitation, venison landjaeger corned beef. Cupidatat chislic corned beef minim ribeye irure in biltong. Frankfurter tail ball tip turducken, pastrami nulla aliquip rump id pork chop. Doner turkey sausage elit. Ipsum kielbasa sirloin, et ham hock meatloaf exercitation filet mignon mollit pariatur."
  },
  {
    name: "Canyon Floor",
    image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?cs=srgb&dl=adult-adventure-backpack-1230302.jpg&fm=jpg",
    description: "Spicy jalapeno bacon ipsum dolor amet ex in meatball exercitation, venison landjaeger corned beef. Cupidatat chislic corned beef minim ribeye irure in biltong. Frankfurter tail ball tip turducken, pastrami nulla aliquip rump id pork chop. Doner turkey sausage elit. Ipsum kielbasa sirloin, et ham hock meatloaf exercitation filet mignon mollit pariatur."
  }
]

  // function seedDB(){
  //   //Remove all campgrounds
  //   Campground.remove({}, function(err){
  //     if(err){
  //       console.log(err);
  //     } else
  //     console.log("Removed Campgrounds");
  //     //add a few campgrounds
  //     data.forEach(function(seed){
  //       Campground.create(seed, function(err, campground){
  //         if(err){
  //           console.log(err);
  //         } else {
  //           console.log("Created a campground");
  //           //create a comment
  //           Comment.create(
  //             {
  //               text: "This place is great but I wish there was internet",
  //               author: "Homer"
  //             }, function(err, comment){
  //               if(err){
  //                 console.log(err);
  //               } else {
  //                 campground.comments.push(comment);
  //                 campground.save();
  //                 console.log("Created new comment");
  //               };
  //             })
  //         };
  //       });
  //     });
  //   });
    
    //add a few comments

  // }

  // module.exports = seedDB;