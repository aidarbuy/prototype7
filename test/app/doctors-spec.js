
describe("posting doctors", function() {
    
    var postRequestDoctor;
    var newDoctor = {name:"New Doctor", description:"A new doctor for \"posting doctors\" test group"};
    
    beforeEach(module('app'));
    
    it("should call /api/doctors with doctor data", inject(function($httpBackend, doctorsFactory) {
        $httpBackend.whenPOST('/api/doctors', function(data) {
            postRequestDoctor = JSON.parse(data);
            expect(postRequestDoctor).to.not.be.empty;
            return true;
        }).respond(200);
        doctorsFactory.save(newDoctor);
        $httpBackend.flush;
    }));
});