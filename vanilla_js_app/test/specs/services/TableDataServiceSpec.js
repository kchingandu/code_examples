define(['jquery', 'TableDataService'], function ($, TableDataService) {
  'use strict';

  var tableDataService;

  describe('TableDataService', function () {

    describe('Instantiation', function () {

      it('should throw an error when successCallBack has not been set', function () {

        expect(createTableDataServiceWithOutSuccessCallBack).to.throwError();

        function createTableDataServiceWithOutSuccessCallBack() {
          new TableDataService('');
        }
      });

      it('should throw an error when failCallBack ' +
        'has not been set', function () {

        expect(createTableDataServiceWithOutFailCallBack).to.throwError();

        function createTableDataServiceWithOutFailCallBack() {
          new TableDataService('', function () {
          });
        }
      });

    });

    describe('Loading data', function () {

      it('should call the successCallBack after an ajax call', function () {

        sinon.stub($, 'ajax').yieldsTo('success');
        sinon.spy(tableDataService, 'successCallBack');

        tableDataService.loadData();

        expect(tableDataService.successCallBack).to.be.calledOnce;
      });

      it('should call the failCallBack after an ajax call', function () {

        sinon.stub($, 'ajax').yieldsTo('fail');
        sinon.spy(tableDataService, 'failCallBack');

        tableDataService.loadData();

        expect(tableDataService.failCallBack.calledOnce).to.be.calledOnce;

        tableDataService.failCallBack.restore();
      });

      before(function () {

        tableDataService = new TableDataService('', successCallBack, failCallBack);

        function successCallBack() {
        }

        function failCallBack() {
        }
      });

      afterEach(function () {
        $.ajax.restore();
      });
    });
  });
});
