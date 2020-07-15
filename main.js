var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        controller: "surveyController",
        templateUrl : "SurveyScanner/index.html"
    })
    .when("/Planetary", {
        controller: "planetryController",
        templateUrl : "Planetary/index.html"
    })
    .when("/Artificial", {
        //controller: "planetryController",
        templateUrl : "Artificial/index.html"
    });
});
