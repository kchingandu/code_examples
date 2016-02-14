define(['jquery', 'underscore', 'TableUI'], function ($, _, TableUI) {
  'use strict';

  var tableUI = new TableUI();

  describe('TableUI', function () {

    describe('Instantiation', function () {

      it('should load and store template', function () {
        expect(tableUI.template).not.to.be(undefined);
      });
    });

    describe('Render', function () {

      it('should render data into table and append to the dom', function () {

        tableUI.render(getMockData());
        expect($('body').html()).to.contain('FundISIN');
      });

      function getMockData() {
        return {
          'Tables': [
            {
              'Name'       : 'Table1',
              'RowCount'   : 56,
              'FieldsCount': 9,
              'Rows'       : [
                {
                  'FundISIN'            : 'GB0003302576',
                  'FundVendorId'        : '60008968',
                  'FundName'            : 'Ignis American Growth Acc',
                  'BenchmarkVendorId'   : '11033960',
                  'GlobalSectorVendorId': '19058050',
                  'LocalSectorVendorId' : '19011010',
                  'Category'            : 'US Equities',
                  'Filter2'             : '19011010',
                  'Filter3'             : ''
                }
              ]
            }
          ]
        };
      }

      beforeEach(function () {
        $('body').append('<div id="table-container" style="display: none;"></div>');
      });

      afterEach(function () {
        $('#table-container').remove();
      });
    });
  });
})
;
