# angular.ui.chartist

Simple Directives for to use [Chartist](https://gionkunz.github.io/chartist-js/index.html) in [AngularJS](https://angularjs.org) Applications

**Please notice:** This is just a simple wrapper with no fancy-schmancy extras. Its aim is just to provide easy access to chartist charts in angular applications. And it's on an very early stage.

## Requirements

* AngularJS
* Chartist

## Usage

First, make shure tthe Chartist JS and CSS Files are included in your project.
Download `ui-chartist.js` and add it to your application:

```html
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
```

Add the UI.Chartist module as dependency to you application module:

```javascript
var app = angular.module('myApp', ['ui.chartist']);
```

In the Controller, create the data and coniguration object:

```javascript
myApp.controller('myController', function($scope) {
    $scope.mychart = {};
    $scope.mychart.data = { ... };
    $scope.mychart.options = { ... };
    $scope.mychart.responsveOptions = { ... };
    });
```

And finally, add the Chart Markup to your Html:

```html
<div bar-chart id="myChart" class="st-chart" data="mychart.data" options="mychart.options"></div>
// or
<div line-chart id="myChart" class="st-chart" data="mychart.data" options="mychart.options"></div>
// ar
<div pie-chart id="myChart" class="st-chart" data="mychart.data" options="mychart.options"></div>
```

## Options

Ass this directive is just an wrapper, configuration and options is done as written in the official [chartist documentation](https://gionkunz.github.io/chartist-js/api-documentation.html).