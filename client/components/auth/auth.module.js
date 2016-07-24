'use strict';

angular.module('meansandApp.auth', ['meansandApp.constants', 'meansandApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
