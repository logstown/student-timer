(function() {
  'use strict';

  angular
    .module('studentTimer')
    .controller('TimerController', TimerController);

  /** @ngInject */
  function TimerController($timeout, webDevTec, toastr, $scope) {
    var vm = this;

    vm.timerRunning = false;
    vm.timerStarted = false;
    vm.student = 0;
    vm.countFrom = 60;


    vm.start = start;
    vm.stop = stop;
    vm.resume = resume;
    vm.reset = reset;
    vm.finished = finished;
    vm.getStudentNumber = getStudentNumber;
    vm.getCycleNumber = getCycleNumber;
    vm.getClass = getClass;

    $scope.$on('timer-tick', function(event, args) {
      if (args.millis === vm.countFrom * 500) {
        toastr.info('Next phase!');
      }
    });

    activate();

    function activate() {

    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function start() {
      $scope.$broadcast('timer-start');
      vm.timerRunning = true;
      vm.timerStarted = true;
    }

    function stop() {
      $scope.$broadcast('timer-stop');
      vm.timerRunning = false;
    }

    function resume() {
      $scope.$broadcast('timer-resume');
      vm.timerRunning = true;
    }

    function reset() {
      $scope.$broadcast('timer-set-countdown', vm.countFrom);
      vm.student = 0;
      start();
    }

    function finished() {
      $scope.$broadcast('timer-start');
      vm.student = vm.student + 1;
      $scope.$apply();
    }

    function getStudentNumber() {
      return (vm.student % 4) + 1;
    }

    function getCycleNumber() {
      return Math.floor(vm.student / 4) + 1;
    }

    function getClass() {
      return 'student-' + getStudentNumber();
    }
  }
})();
