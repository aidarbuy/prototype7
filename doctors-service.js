var bodyParser = require("body-parser");

module.exports = function(db, app) {
    app.use(bodyParser.json());

    app.get('/api/doctors', function(req, res) {
        db.findDoctors().then(function(collection) {
            console.log("Serving GET /api/doctors now:");
            res.send(collection);
        })
    });

    app.post('/api/doctors', function(req, res) {
        console.log("Serving POST /api/doctors now:");
        db.saveDoctor(req.body);
        res.end();
    })
};
