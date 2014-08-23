'use strict';

/**
 * @ngdoc function
 * @name html5jenterprise.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularAppApp
 */
var mod = angular.module('html5jenterprise');

mod.controller('MainCtrl', function($scope, $http) {
    $http.get('events/events.json')
      .success(function(data) {
      	$scope.events = data;
      });
  });

mod.controller('ArchiveCtrl', function($scope, $http) {
    $http.get('events/archive.json')
      .success(function(data) {
      	$scope.archives = data;
      });
  });

mod.controller('MemberCtrl', function($scope, $http) {
    $http.get('members/members.json')
      .success(function(data) {
        $scope.members = data;
      });
  });
