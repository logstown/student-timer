(function() {
  'use strict';

  angular
    .module('studentTimer')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('timer', {
        url: '/',
        templateUrl: 'app/timer/timer.html',
        controller: 'TimerController',
        controllerAs: 'timer'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
