# angular.ui.chartist

Simple Directives for to use [Chartist](https://gionkunz.github.io/chartist-js/index.html) in [AngularJS](https://angularjs.org) Applications

**Please notice:** This is just a simple wrapper with no fancy-schmancy extras. Its aim is just to provide easy access to chartist charts in angular applications. And it's on an very early stage.

## Requirements

* AngularJS
* Chartist

## Usage

First, make shure tthe Chartist JS and CSS Files are included in your project.
Download [`ui-chartist.js`](https://raw.githubusercontent.com/rotorstudio/angular-ui-chartist/master/src/ui-chartist.js) and add it to your application:

```html
<script type="text/javascript" src="path/to/ui-chartist.js"></script>
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
    $scope.mychart.responsiveOptions = { ... };
    });
```

And finally, add the Chart Markup to your Html:

```html
<div bar-chart class="st-chart" data="mychart"></div>
// or
<div line-chart class="st-chart" data="mychart"></div>
// ar
<div pie-chart class="st-chart" data="mychart"></div>
```

Please note, that the *class* attribute is mandatory.

## Options

As this directive is just an wrapper, configuration and options is done as written in the official [chartist documentation](https://gionkunz.github.io/chartist-js/api-documentation.html).
