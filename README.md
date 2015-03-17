Angular Panels
================

Pure [AngularJS](http://www.angularjs.org) based Side Panels.
[![ScreenShot](https://rawgit.com/eu81273/angular.panels/gh-pages/images/preview.png)](http://eu81273.github.io/angular.panels/)


## Demo

[http://eu81273.github.io/angular.panels/](http://eu81273.github.io/angular.panels/)



## Installation

Copy the script and css into your project and add a script and link tag to your page.

```html
<script type="text/javascript" src="angular.panels.js"></script>
<link rel="stylesheet" type="text/css" href="angular.panels.css">
```

Add a dependency to your application module.

```javascript
angular.module('myApp', ['angular.panels']);
```

And add panels container tag to your application.

```html
<div
	data-panels="true"
	data-panel-left-template="../resources/template/left.html"
	data-panel-left-controller="leftCtrl" >
</div>

```

some attributes of angular panels are below.

- panels: panels directive.
- panel-left-template : panel's template of left side.
- panel-left-controller : panel's controller of left side.
- panel-top-template : panel's template of top side.
- panel-top-controller : panel's controller of top side.
- panel-right-template : panel's template of right side.
- panel-right-controller : panel's controller of right side.
- panel-bottom-template : panel's template of bottom side.
- panel-bottom-controller : panel's controller of bottom side.


## Open panel

Creating snackbar also very simple. Inject snackbar service to your app then call the service method like below.


```javascript
var app = angular.module('angularApplication', ['angular.panels']);

app.controller('defaultController', function($scope, panels) {

	//open left panel
	panels.open("left");
	
	//close panel
	panels.close();
});


app.controller('leftCtrl', function($scope) {

	//left panel controller

});

```

## Browser Compatibility

Report me please. I just tested on Chrome 41.

## Changelogs


#### version 1.0.0


## License

The MIT License.

Copyright ⓒ 2015 AHN JAE-HA.

See [LICENSE](https://github.com/eu81273/angular.panels/blob/master/LICENSE)
