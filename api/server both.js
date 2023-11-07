// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Requiring necessary npm packages
const express = require("express");
const compression = require('compression');
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3002;

// compress all responses
app.use(compression());

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static directory
app.use(express.static(path.join(__dirname, "../public/build")));
app.get("/*", function(req, res) {
  res.sendFile((path.join(__dirname, "../public/build/index.html")));
});

app.use(cors());
// Routes
require("./app/routes/api.js")(app);
require("./app/routes/html.js")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});