'use strict';

describe('Controller: SettingsCtrl', function () {

    // load the controller's module
    beforeEach(module('matikkaApp'));

    var SettingsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SettingsCtrl = $controller('SettingsCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('test default values', function () {
        expect(SettingsCtrl.config.rows).toBe(10);
        expect(SettingsCtrl.config.nmbrOfValues).toBe(2);
        expect(SettingsCtrl.config.minValue).toBe(0);
        expect(SettingsCtrl.config.maxValue).toBe(10);
    });

    it('updated min and max values to be -5 and 20', function () {
        SettingsCtrl.value = "-5;20";
        SettingsCtrl.updateMinMax();

        expect(SettingsCtrl.config.minValue).toBe(-5);
        expect(SettingsCtrl.config.maxValue).toBe(20);
    });

});
