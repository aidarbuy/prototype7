var express = require('express');
var app = express();
var doctorsData = require("./doctors-data");
require("./doctors-service")(doctorsData, app);

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('*', function(req, res) {
    res.render('index');
});

doctorsData.connectDB('mongodb://dbuser:dbpassword@ds043981.mongolab.com:43981/prototype7')
.then(function() {
    console.log("database connected successfully");
    doctorsData.seedDoctors();
});

var portNum = process.env.PORT;
console.log("  server listening on port " + portNum);
app.listen(portNum, process.env.IP);
