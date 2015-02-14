app = angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource, doctorsFactory) {
    $scope.doctors = $resource('/api/doctors').query();
    
    $scope.submit = function() {
        var doctor = {name:$scope.name, description:$scope.description};
        doctorsFactory.save(doctor);
        $scope.doctors.push(doctor);
        console.log($scope.doctors);
    };
});
