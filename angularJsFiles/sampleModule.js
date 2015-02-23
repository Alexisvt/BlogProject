// require("../bower_components/angularjs/angular.min.js");
// var angular = require("angular");
 require("angular");

var data = require("./todoData.js");

var sampleApp = angular.module("sampleApp", []);

sampleApp.controller("sampleCtrl", function($scope){

  $scope.todo = data;

  } );
