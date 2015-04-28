'use strict';

var app = angular.module('angularApplication', ['angular.panels']);

//add panels
app.config(['panelsProvider', function (panelsProvider) {

    panelsProvider
        .add({
            id: 'test01',
            position: 'left',
            size: '700px',
            templateUrl: '../template/left.html',
            controller: 'leftCtrl'
        })
        .add({
            id: 'test02',
            position: 'right',
            size: '50%',
            templateUrl: '../template/right.html',
            controller: 'rightCtrl'
        })
        .add({
            id: 'test03',
            position: 'top',
            size: '20%',
            templateUrl: '../template/top.html',
            controller: 'topCtrl'
        })
        .add({
            id: 'test04',
            position: 'bottom',
            size: '80%',
            templateUrl: '../template/bottom.html',
            controller: 'testpanelCtrl',
            closeCallbackFunction: 'bottomClose'
        });
}]);

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

		panels.open("test01");
	});
}]);


//right panel controller
app.controller('rightCtrl', ['$scope', 'panels', function ($scope, panels) {

	$scope.$on('rightHello', function(event, args) {

		$scope.message = args.message;

		panels.open("test02");
	});
}]);


//top panel controller
app.controller('topCtrl', ['$scope', 'panels', function ($scope, panels) {

	$scope.$on('topHello', function(event, args) {

		$scope.message = args.message;

		panels.open("test03");
	});
}]);


//bottom panel controller
app.controller('bottomCtrl', ['$scope', 'panels', function ($scope, panels) {

	$scope.$on('bottomHello', function(event, args) {

		$scope.message = args.message;

		panels.open("test04");
	});
}]);