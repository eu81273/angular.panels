Angular Panels
================

Pure [AngularJS](http://www.angularjs.org) based lightweight(1.7KB) Side Panels. 
[![ScreenShot](https://rawgit.com/eu81273/angular.panels/gh-pages/images/preview.png)](http://eu81273.github.io/angular.panels/)


## Demo

[http://eu81273.github.io/angular.panels/](http://eu81273.github.io/angular.panels/)



## Installation

Copy the script and css into your project and add a script and link tag to your page.

```html
<script type="text/javascript" src="angular.panels.js"></script>
<link rel="stylesheet" type="text/css" href="angular.panels.css">
```

And add panels container tag to your application.

```html
<div data-panels="true"></div>

```

Add a dependency to your application module and configure panel settings.

```javascript
var app = angular.module('myApp', ['angular.panels']);

app.config(['panelsProvider', function (panelsProvider) {

	panelsProvider
		.add({
			id: "testmenu",
			position: "right",
			size: "700px",
			templateUrl: "../resources/template/testmenu.html",
			controller: "testmenuCtrl"
		})
		.add({
			id: "testpanel",
			position: "right",
			size: "80%",
			templateUrl: "../resources/template/testpanel.html",
			controller: "testpanelCtrl",
			closeCallbackFunction: "testpanelClose"
		});
}]);

```

attributes are..

- id : panel's unique id.
- position : the side panel slides from top/right/bottom/left.
- size : panel's height or width. unit(px,em,%..) is required.
- templateUrl : panel template url.
- controller : panel's controller name.
- openCallbackFunction : panel open callback.
- closeCallbackFunction : panel close callback.


## Open panel

Opening panel also very simple. Inject panels service to your app then call the service method like below.


```javascript
var app = angular.module('myApp', ['angular.panels']);

app.config(['panelsProvider', function (panelsProvider) {

	panelsProvider
		.add({
			id: "testmenu",
			position: "right",
			size: "700px",
			templateUrl: "../resources/template/testmenu.html",
			controller: "testmenuCtrl"
		});
}]);

app.controller('defaultController', function($scope, panels) {

	//open testmenu panel
	panels.open("testmenu");
});


app.controller('testmenuCtrl', function($scope) {

	//left panel controller

});

```

## Browser Compatibility

IE9+, Chrome, Safari

## Changelogs

#### version 1.0.3
- add provider to configure panels
- remove limitation of number of panel

#### version 1.0.0
- first release

## License

The MIT License.

Copyright ⓒ 2015 AHN JAE-HA.

See [LICENSE](https://github.com/eu81273/angular.panels/blob/master/LICENSE)
