require.config({
  waitSeconds: 15,
  baseUrl    : './lib',
  paths      : {
    mocha     : 'mocha/mocha',
    expect    : 'expect/expect',
    jquery    : '../../app/scripts/vendor/jquery',
    underscore: '../../app/scripts/vendor/underscore',

    Application      : '../../app/scripts/application/Application',
    TableUI          : '../../app/scripts/application/view/TableUI',
    Accordion        : '../../app/scripts/application/view/Accordion',
    TableDataService : '../../app/scripts/application/services/TableDataService',
    ResourceLocations: '../../app/scripts/application/support/ResourceLocations'

  },
  shim       : {

    underscore: {
      deps   : ['jquery'],
      exports: '_'
    },

    mocha: {
      deps: getSinonDependencies()
    }
  }
});

require(['mocha'], function () {

  mocha.setup('bdd');

  require(getSpecs(), function () {
    mocha.run();
  });
});

function getSpecs() {
  'use strict';
  return [
    '../specs/view/TableUISpec',
    '../specs/application/ApplicationSpec',
    '../specs/services/TableDataServiceSpec'
  ];
}

function getSinonDependencies() {

  return [
    'expect',
    'sinon/sinon',
    'sinon/stub',
    'sinon/match',
    'sinon/spy',
    'sinon/call',
    'sinon/mock',
    'sinon/test',
    'sinon/test_case'];
}