'use strict';

(function(){

class MapsComponent {

  constructor($scope) {
    this.$scope = $scope;
	}


	$onInit(){
		var mymap = L.map('mapid').setView([51.0, -1.5], 11);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
    var marker = L.marker([51.0, -1.5]).addTo(mymap);

    mymap.on('click', this.onMapClick);

	}

  onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
  }

}

angular.module('meansandApp')
  .component('maps', {
    templateUrl: 'app/maps/maps.html',
    controller: MapsComponent,
    controllerAs: 'mapsCtrl'
  });

})();
