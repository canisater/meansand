'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $state, socket) {
      this.$http = $http;
      this.$state = $state;
      this.socket = socket;
      this.awesomeThings = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    maps() {
      console.log('AAAA');
      this.$state.go('maps');
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('meansandApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
