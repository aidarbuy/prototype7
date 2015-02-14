angular.module('app').factory('doctorsFactory', function($resource) {
    return $resource('/api/doctors');
});
