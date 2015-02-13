var expect = require('chai').expect;
var mongoose = require('mongoose');
var Promise = require('bluebird');
var doctorsData = require('../../doctors-data');

console.log("doctorsData.findDoctors: " + doctorsData.findDoctors);

function resetDoctors() {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections['doctors'].drop(resolve, reject);
    });
}

describe("db get doctors", function() {
    
    var doctors;
    
    before(function(done) {
        doctorsData.connectDB('mongodb://localhost/prototype7')
        .then(resetDoctors)
        .then(doctorsData.seedDoctors)
        .then(doctorsData.findDoctors)
        .then(function(collection) {
            doctors = collection;
            done();
        });
    });
    
    it("should not be empty since doctors are seeded", function() {
        expect(doctors.length).to.be.at.least(1);
        console.log("doctors.length = " + doctors.length);
    });
    
    it("should have a doctor with a name", function() {
        expect(doctors[0].name).to.be.not.empty;
    });

    it("should have a doctor with a description", function() {
        expect(doctors[0].description).to.be.not.empty;
    });
});
