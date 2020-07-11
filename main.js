var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: "surveyController",
        templateUrl : "SurveyScanner/index.html"
    })
    .when("/Planetary", {
        templateUrl : "Planetary/index.html"
    });
});
