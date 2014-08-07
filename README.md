angular-nested-view
===================

An Angular directive for creating nested views.


__Why do I need this?__

If you've found this page you're probably looking for a way to allow communication between view controllers and nested controllers. You probably found the same Stackoverflow pages that I did, telling you to use ui-router.  While ui-router is a great routing plugin, it's way more than I needed. Plus the scope inheritance is a bit too implicit for my taste. I also didn't want to create a service (singlton) every time I wanted a nested view.

__Usage Example__

Pass the directive your controller, template URL, and anything you want to inject.

```HTML
<div ng-controller="MainCtrl as c">
  <nested-view controller="NestedCtrl as nc"
               template-url="'nested-view.html'"
               inject="{address: c.address}">
  </nested-view>
</div>
```


```Javascript
myApp.controller('MainCtrl', function( $scope ){
  this.address = {
    city: 'Mountain View',
    state: 'CA',
    zip: '92154'
  };
});

// address object from parent injected into nested controller.
myApp.controller('NestedCtrl', function($scope, address){
  this.address = address;
});
```


Plunker: http://plnkr.co/edit/ELWbhFKJUVdjRSp5obH1?p=preview
