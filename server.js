// npm packages
var express = require("express");
var path = require("path");

// creating express server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// "route" files.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
