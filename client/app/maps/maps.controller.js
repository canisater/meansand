'use strict';

(function(){

class MapsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('meansandApp')
  .component('maps', {
    templateUrl: 'app/maps/maps.html',
    controller: MapsComponent,
    controllerAs: 'mapsCtrl'
  });

})();
