
// Below data will hold all of the potential friend information.

var friendArray = [
    {
        name: "Chandler",
        //photo: "photos/Chandler.png",
        photo: "https://www.cheatsheet.com/wp-content/uploads/2018/09/Chandler-on-Friends.png",
        scores: [3, 2, 3, 1, 5, 2, 2, 3, 1, 2]
    },
    {
        name: "Monica",
        photo: "https://vignette.wikia.nocookie.net/friends/images/c/c4/Monica_overalls.jpg/revision/latest/scale-to-width-down/267?cb=20190210055646",
        scores: [5, 4, 4, 1, 3, 4, 4, 3, 2, 4]
    },
    {
        name: "Rachel",
        photo: "https://akns-images.eonline.com/eol_images/Entire_Site/2019031/rs_600x600-190131112337-600-rachel-friends.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90",
        scores: [1, 1, 5, 2, 1, 1, 1, 1, 5, 5]
    }
]
 
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  