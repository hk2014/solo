angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'

  },
  //controller: function(){
  	//this.fishes = 
  	// this.fishes = (fish) => {
  	// 	this.
  	// }
  //},

  // template: `
  //   <div>
  //     <fish-table-row></fish-table-row>
  //     <fish-table-row></fish-table-row>
  //     <fish-table-row></fish-table-row>
  //   </div>`
  template: '<fish-table-row fish="$ctrl.fishes" ng-repeat="fish in $ctrl.fishes"></fish-table-row>'
});