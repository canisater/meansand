'use strict';

angular.module('meansandApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('maps', {
        url: '/maps',
        template: '<maps></maps>'
      });
  });
