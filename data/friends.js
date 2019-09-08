
// Below data will hold all of the potential friend information.

var friendArray = [
    {
        name: "Chandler",
        photo: "photos/Chandler.png",
        scores: [3, 2, 3, 1, 5, 2, 2, 3, 1, 2]
    },
    {
        name: "Monica",
        photo: "photos/monica.jpg",
        scores: [5, 4, 4, 1, 3, 4, 4, 3, 2, 4]
    },
    {
        name: "Rachel",
        photo: "photos/Rachel.png",
        scores: [1, 1, 5, 2, 1, 1, 1, 1, 5, 5]
    }
]
 
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  