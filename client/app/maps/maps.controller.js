'use strict';

(function(){

class MapsComponent {

  	constructor($scope) {
    	this.$scope = $scope;
  	}


	$onInit(){
		var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	}

	

}

angular.module('meansandApp')
  .component('maps', {
    templateUrl: 'app/maps/maps.html',
    controller: MapsComponent,
    controllerAs: 'mapsCtrl'
  });

})();
