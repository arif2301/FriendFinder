
// LOAD DATA

var friends = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
  // req.body is available since we're using the body parsing middleware
    friends.push(req.body);
    var userid = friends.length -1;
    console.log(userid)
    console.log("userid : "+ userid);
    var match;
    var lowScore = 40;
    for (x=0; x< (userid-1); x++) {

      var total = 0;
      for (y=0; y <10; y++){
        var difference = Math.abs(parseInt(friends[userid].scores[y]) - parseInt(friends[x].scores[y]));
        total += difference;
      }
      if (total < lowScore){
        lowScore = total;
        match = friends[x]
      }
      console.log("match score: " + lowScore + " for " + match.name);

    }

    console.log (match);
    res.json(friends[0])
    //res.json(match)
  });
}
