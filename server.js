const express = require('express');
// // const compression = require("compression");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;


// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));

// Set up Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname + '/notes.html'))
});
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));