/**
 * FOR DOCUMENTATION REFER TO TableUISpec.js
 */
define(['jquery',
    'TableDataService',
    'ResourceLocations',
    'underscore'],
  function ($, TableDataService, ResourceLocations, _) {
    'use strict';

    function TableUI() {
      loadTableTemplate.call(this);
    }

    TableUI.prototype.render = function (tableData) {

      var tableHTML = _.template(this.template, {data: tableData});
      $('#table-container').append(tableHTML);
    };

    function loadTableTemplate() {

      var self             = this,
          dataSourceURL    = ResourceLocations.TABLE_TEMPLATE_URL,
          tableDataService = new TableDataService(dataSourceURL, setTemplate, dataLoadFailed);

      function setTemplate(data) {
        self.template = String(data);
      }

      tableDataService.loadData();
    }

    function dataLoadFailed() {
      console.error('Failed to load data from path : ' + ResourceLocations.TABLE_TEMPLATE_URL);
    }

    return TableUI;
  });
