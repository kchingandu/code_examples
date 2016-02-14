require.config({

  baseUrl: './scripts',
  paths  : {
    jquery    : 'http://code.jquery.com/jquery-1.10.1.min',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
    json2     : '//cdnjs.cloudflare.com/ajax/libs/json2/20121008/json2',

    TableDataService : 'application/services/TableDataService',
    ResourceLocations: 'application/support/ResourceLocations',
    TableUI          : 'application/view/TableUI',
    Accordion        : 'application/view/Accordion'
  },
  shim   : {
    underscore: {
      deps   : ['jquery'],
      exports: '_'
    }
  }
});
