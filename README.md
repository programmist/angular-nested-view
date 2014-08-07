angular-nested-view
===================

An Angular directive for creating nested views.  

Usage Example:


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
