/*
	@license Angular Panels version 1.0.1
	ⓒ 2015 AHN JAE-HA http://github.com/eu81273
	License: MIT

*/

(function ( angular ) {
	"use strict";

	var module = angular.module( "angular.panels", [] );


	//panels factory
	module.factory('panels', function () {
		var body = angular.element(document.body);
		return {
			position: undefined,

			open: function (position) {
				body.addClass('overflow-hidden');
				this.position = position;
			},

			close: function () {
				body.removeClass('overflow-hidden');
				this.position = undefined;
			}
		};
	});


	//panels directive
	module.directive('panels', ['$http', '$compile', 'panels', function ($http, $compile, panels) {

		return {
			//attribute
			restrict: 'A',
			
			//isolate
			scope: {},

			//shares data between factory and controller
			controller: ['$scope', function ($scope) {
				$scope.panels = panels;
			}],

			link: function ( scope, element, attrs ) {

				//dim layer
				element.append($compile('<div class="dim-layer" data-ng-class="{open : panels.position}" data-ng-click="panels.close();"></div>')(scope));

				//left panel
				if(attrs.panelLeftTemplate && attrs.panelLeftController){
					$http.get(attrs.panelLeftTemplate).success(function (panelContent) {
						var template = '<div class="panels panel-left" data-ng-class="{open : panels.position==\'left\'}" data-ng-controller="' + attrs.panelLeftController + '">' + panelContent + '</div>';
						element.append($compile(template)(scope));
					});
				}

				//top panel
				if(attrs.panelTopTemplate && attrs.panelTopController){
					$http.get(attrs.panelTopTemplate).success(function (panelContent) {
						var template = '<div class="panels panel-top" data-ng-class="{open : panels.position==\'top\'}" data-ng-controller="' + attrs.panelTopController + '">' + panelContent + '</div>';
						element.append($compile(template)(scope));
					});
				}

				//right panel
				if(attrs.panelRightTemplate && attrs.panelRightController){
					$http.get(attrs.panelRightTemplate).success(function (panelContent) {
						var template = '<div class="panels panel-right" data-ng-class="{open : panels.position==\'right\'}" data-ng-controller="' + attrs.panelRightController + '">' + panelContent + '</div>';
						element.append($compile(template)(scope));
					});
				}

				//bottom panel
				if(attrs.panelBottomTemplate && attrs.panelBottomController){
					$http.get(attrs.panelBottomTemplate).success(function (panelContent) {
						var template = '<div class="panels panel-bottom" data-ng-class="{open : panels.position==\'bottom\'}" data-ng-controller="' + attrs.panelBottomController + '">' + panelContent + '</div>';
						element.append($compile(template)(scope));
					});
				}
			}
		}
	}]);

})(angular);