'use strict';

(function(){

class MapsComponent {

  	constructor($scope) {
    	this.$scope = $scope;
  	}


	$onInit(){
		angular.extend(this.$scope,	{
			center: {
				lat:51.0,
				lng:-1.5,
				zoom: 10
			 }
		});
		console.log('here');
	}

	

}

angular.module('meansandApp')
  .component('maps', {
    templateUrl: 'app/maps/maps.html',
    controller: MapsComponent,
    controllerAs: 'mapsCtrl'
  });

})();
