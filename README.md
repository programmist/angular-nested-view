angular-nested-view
===================

Angular directive for creating nested views

Usage:


<div ng-controller="MainCtrl as c">
  <nested-view controller="NestedCtrl as nc"
               template-url="'nested-view.html'"
               inject="{address: c.address}">
  </nested-view>
</div>

...

myApp.controller('MainCtrl', function( $scope ){
  this.address = {
    city: 'Mountain View',
    state: 'CA',
    zip: '92154'
  };
});

myApp.controller('NestedCtrl', function($scope, address){
  this.address = address;
});
