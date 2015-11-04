/*
	@license Angular Panels version 1.0.3
	ⓒ 2015 AHN JAE-HA http://github.com/eu81273
	License: MIT

*/

(function ( angular ) {
	"use strict";

	var module = angular.module( "angular.panels", [] );

	module.constant("panelList", {});
	module.provider("panels", ["panelList", function (panelList) {

		//add panels in config
		this.add = function (panel) {

			//add panel
			if (panel && panel.id) {
				panelList[panel.id] = panel;
			}

			//for chaining
			return this;
		};

		//factory
		this.$get = ['$parse', function ($parse) {
			//document body selector
			var documentBody = angular.element(document.body);
			
			//panels factory
			var panelsFactory = {
				//current opened panel's id
				opened: undefined,

				//panel open method
				open: function (id) {
					//add body overflow hiden attribute
					documentBody.addClass('overflow-hidden');
					//close other panels
					panelsFactory.opened && panelsFactory.close(panelsFactory.opened);

					//check panel
					if (id && panelList[id]) {
						var panel = panelList[id];
						var panelElement = panel.element;
						var panelScope = panelElement.scope();
						var openCallbackFunction = $parse(panel.openCallbackFunction)(panelScope);

						//set panel style
						panelElement.attr('style', panelsFactory.style(panel, true));
						//if type of closeAction is function..
						typeof openCallbackFunction == 'function' && openCallbackFunction();
					}

					//open panel
					panelsFactory.opened = id;
				},

				//panel close method
				close: function () {
					//remove body overflow hiden attribute
					documentBody.removeClass('overflow-hidden');
					
					//check opened panel
					if (panelsFactory.opened && panelList[panelsFactory.opened]) {
						var panel = panelList[panelsFactory.opened];
						var panelElement = panel.element;
						var panelScope = panelElement.scope();
						var closeCallbackFunction = $parse(panel.closeCallbackFunction)(panelScope);

						//remove panel style
						panelElement.attr('style', panelsFactory.style(panel, false));
						//if type of closeAction is function..
						typeof closeCallbackFunction == 'function' && closeCallbackFunction();
					}

					//close panel
					panelsFactory.opened = undefined;
				},

				//panel style
				style: function (panel, open) {
					switch (panel.position) {
						case "top": case "bottom":
							return panel.position + ":" + (open ? "0;" : "-" + panel.size + ";") + "height:" + panel.size + "";

						case "left": case "right":
							return panel.position + ":" + (open ? "0;" : "-" + panel.size + ";") + "width:" + panel.size + "";
					}
				}
			};

			return panelsFactory; 
		}];
	}]);

	//panels directive
	module.directive('panels', ['$http', '$templateCache', '$compile', 'panels', 'panelList', function ($http, $templateCache, $compile, panels, panelList) {

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

				//add panel
				angular.forEach(panelList, function(panel, key) {

					//get template
					$http.get(panel.templateUrl, {cache: $templateCache}).success(function (template) {

						//panel template
						var template = '<div style="' + panels.style(panel) + '" class="panels panel-' + panel.position + '" data-ng-class="{open : panels.opened==\'' + panel.id + '\'}"  data-ng-controller="' + panel.controller + '">' + template + '</div>';
						//compile template
						var compiled = $compile(template)(scope);
						//add compiled template
						element.append(compiled);
						//save selector
						panelList[key].element = angular.element(compiled);
					});
				});
				
				//add dim
				element.append($compile('<div class="dimming" data-ng-class="{open : panels.opened}" data-ng-click="panels.close();"></div>')(scope));
			}
		}
	}]);

})(angular);
