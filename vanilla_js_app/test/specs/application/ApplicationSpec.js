define(['Application'], function (application) {
  'use strict';

  describe('Application', function () {

    describe('Startup', function () {

      it('should setup side bar hide and show content toggle functionality', function () {

        sinon.stub(application, 'setupSidebarShowAndHide');
        application.startup();

        expect(application.setupSidebarShowAndHide).to.be.calledOnce;

        application.setupSidebarShowAndHide.restore();
      });

      it('should load table data and render it to the dom', function () {

        sinon.stub(application, 'retrieveAndRenderTableData');

        application.startup();

        expect(application.retrieveAndRenderTableData).to.be.calledOnce;

        application.retrieveAndRenderTableData.restore();
      });
    });
  });
});