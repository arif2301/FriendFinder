// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
  // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  // It will do this by sending out the value "true" have a table
  // req.body is available since we're using the body parsing middleware
    friends.push(req.body);
    var userid = friends.length;
    var match;
    var lowScore = 40;
    for (x=0; x< (userid-1); x++) {

      var total = 0;
      for (y=0; y <10; y++){
        var difference = Math.abs(friends[userid].scores[y] - friends[x].scores(y));
        total += difference;
      }
      if (total < lowScore){
        lowScore = total;
        match = friends[x]
      }

    }


    res.json(match)
  });
}
