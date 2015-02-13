angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource, doctorsFactory) {
    $scope.doctors = $resource('/api/doctors').query();
    // doctorsFactory.save({name:"Doctors Factory", description:"Doctors factory description hrer"});
});