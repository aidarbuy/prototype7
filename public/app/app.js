var app = angular.module('app', []);

app.controller('testCtrl', function($scope) {
    $scope.doctors = [
        {name:"John Michael", description:"John's short description."},
        {name:"Betty Hartling", description:"Betty's short description."},
        {name:"Kate Collins", description:"Kate's short description."},
        {name:"Larry Qwerty", description:"Larry's short description."}
    ];
});
