(function() {
  'use strict';

  angular
    .module('studentTimer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
