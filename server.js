// Use Express to initialize server
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

// Require our models for syncing
var db = require("./models");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// To enable overriding POST method with PUT and DELETE methods
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Access static files 
var path = require("path");
app.use("/static", express.static(path.join(__dirname, "/public")));

// Initialize Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and allow server to access them
var routes = require("./controllers/burgers_controller");
app.use("/", routes);

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Listening on PORT " + PORT);
	});
});