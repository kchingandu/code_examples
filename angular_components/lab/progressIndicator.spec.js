describe('progressIndicator', function () {

    'use strict';

    var scope;
    var injector;
    var directiveElement;

    it('should register the element and programme data to the progress indicator updater parent directive', function () {

        var progressIndicatorElement           = directiveElement.find('div')[0];
        var progressIndicatorUpdaterController = directiveElement.controller('progressIndicatorUpdater');
        var registerVO                         = progressIndicatorUpdaterController.register.args[0][0];

        registerVO.data.should.equal(scope.programme);
        registerVO.element[0].should.equal(progressIndicatorElement);
    });

    beforeEach(function () {

        registerModuleDependencies();

        setVariablesFromInjectors();

        compileDirective();
    });

    function registerModuleDependencies() {

        module('go.progressIndicator', function ($compileProvider) {
            $compileProvider.directive('progressIndicatorUpdater', progressIndicatorUpdaterMockDirective());
        });
    }

    function progressIndicatorUpdaterMockDirective() {

        return function () {

            return {
                controller: function () {
                    this.register = sinon.stub();
                }
            };
        };
    }

    function setVariablesFromInjectors() {

        inject(function ($injector, $rootScope) {

            injector = $injector;
            scope    = $rootScope.$new();
        });
    }

    function compileDirective() {

        var $compile = injector.get('$compile');

        scope.programme = {t: 'mock programme title'};

        var directiveTemplate = '<div progress-indicator-updater> <div progress-indicator="programme"></div></div>';

        directiveElement = $compile(directiveTemplate)(scope);

        scope.$digest();
    }
});
