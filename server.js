var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/api/doctors', function(req, res) {
    res.send
})

app.get('*', function(req, res) {
    res.render('index');
});

var portNum = process.env.PORT;

console.log("  server listening on port " + portNum);

app.listen(portNum, process.env.IP);
