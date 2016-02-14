/**
 * FOR DOCUMENTATION REFER TO ApplicationSpec.js
 */
define([
    'TableDataService',
    'ResourceLocations',
    'TableUI',
    'underscore',
    'Accordion'
  ],
  function (TableDataService, ResourceLocations, TableUI, _, Accordion) {
    'use strict';
    function Application() {

    }

    Application.prototype.startup = function () {

      this.setupSidebarShowAndHide();
      this.retrieveAndRenderTableData();
    };

    Application.prototype.retrieveAndRenderTableData = function () {

      var dataSourceURL    = ResourceLocations.TABLE_DATA_URL,
          tableDataService = new TableDataService(dataSourceURL, this.renderTableData, this.dataLoadFailed);

      tableDataService.loadData();
    };

    Application.prototype.renderTableData = function (data) {

      var tableUI = new TableUI();
      tableUI.render(data);
    };

    Application.prototype.dataLoadFailed = function () {
      alert('Failed to load data from path : ' + ResourceLocations.TABLE_DATA_URL);
    };

    Application.prototype.setupSidebarShowAndHide = function () {
      var accordion = new Accordion();
      accordion.activate();
    };

    return new Application();
  });
