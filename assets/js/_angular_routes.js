'use strict';

var app = angular.module('appRouter', ['ngRoute', 'ngAnimate']);
 

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: 'home_partial.html'
  }).when('/ceremony', {
    templateUrl: 'ceremony_partial.html'
  }).when('/guest-information', {
    templateUrl: 'guest_information_partial.html'
  }).when('/registries', {
    templateUrl: 'registries_partial.html'
  }).when('/proposal', {
    templateUrl: 'proposal_partial.html'
  }).when('/photos', {
    templateUrl: 'photos_partial.html'
  }).otherwise({
        redirectTo: '/'
  });
 
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);

}])