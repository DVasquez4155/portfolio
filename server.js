// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Requiring necessary npm packages
const express = require("express");
const compression = require('compression');
var bodyParser = require('body-parser');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// compress all responses
app.use(compression());

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static directory
app.use(express.static("public"));

// app.use('/assets/bootstrap/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
// app.use('/assets/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
// app.use('/assets/bootstrap/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// Routes
require("./app/routes/api.js")(app);
require("./app/routes/html.js")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});