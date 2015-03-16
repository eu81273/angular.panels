'use strict';

var app = angular.module('angularApplication', ['angular.panels']);

//default controller
app.controller('defaultController', ['$scope', 'panels', function ($scope, panels) {

	$scope.leftOpen = function () {
		$scope.$broadcast('leftHello', {message : $scope.message}); 
	};

	$scope.rightOpen = function () {
		$scope.$broadcast('rightHello', {message : $scope.message}); 
	};

	$scope.topOpen = function () {
		$scope.$broadcast('topHello', {message : $scope.message}); 
	};

	$scope.bottomOpen = function () {
		$scope.$broadcast('bottomHello', {message : $scope.message}); 
	};

}]);

//left panel controller
app.controller('leftCtrl', ['$scope', 'panels', function ($scope, panels) {

	$scope.$on('leftHello', function(event, args) {

		$scope.message = args.message;

		panels.open("left");
	});

	$scope.closePane = function () {
		panels.close();
	};
}]);


//right panel controller
app.controller('rightCtrl', ['$scope', 'panels', function ($scope, panels) {

	$scope.$on('rightHello', function(event, args) {

		$scope.message = args.message;

		panels.open("right");
	});

	$scope.closePane = function () {
		panels.close();
	};
}]);


//top panel controller
app.controller('topCtrl', ['$scope', 'panels', function ($scope, panels) {

	$scope.$on('helloTop', function(event, args) {

		$scope.message = args.message;

		panels.open("top");
	});

	$scope.closePane = function () {
		panels.close();
	};
}]);


//bottom panel controller
app.controller('bottomCtrl', ['$scope', 'panels', function ($scope, panels) {

	$scope.$on('bottomHello', function(event, args) {

		$scope.message = args.message;

		panels.open("bottom");
	});

	$scope.closePane = function () {
		panels.close();
	};
}]);