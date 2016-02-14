define(['jquery'], function () {
  'use strict';
  require([
    'application/Application'
  ], function () {
    var applicationInstance = arguments[0];
    applicationInstance.startup();
  });
});