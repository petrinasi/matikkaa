'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('matikkaApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('default selected option should be id: 1', function () {
        expect(scope.data.selectedOption.id).toBe('1');
    });

    it('default generated calculation list length should be: 10', function () {
        expect(scope.data.generatedCalculations.length).toBe(10);
    });

    it('generated calculation list length should be: 15', function () {
        scope.data.selectedOption = scope.data.availableOptions[2];
        scope.data.config.length = 15;
        scope.generateCalculations();
        expect(scope.data.selectedOption.id).toBe('r');
        expect(scope.data.generatedCalculations.length).toBe(15);
    });
});
