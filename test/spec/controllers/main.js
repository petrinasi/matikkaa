'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('matikkaApp'));

    var MainCtrl;

    // Initialize the controller and a mock MainCtrl
    beforeEach(inject(function ($controller) {
        MainCtrl = $controller('MainCtrl');
    }));

    it('default selected option should be id: 1', function () {
        expect(MainCtrl.data.selectedOption.id).toBe('1');
    });

    it('default generatedCalculations length to be: 10', function () {
        MainCtrl.generateCalculations();
        expect(MainCtrl.data.generatedCalculations.length).toBe(10);
    });

    it('generatedCalculations length to be: 15', function () {
        MainCtrl.data.config.rows = 15;
        MainCtrl.generateCalculations();
        expect(MainCtrl.data.generatedCalculations.length).toBe(15);
    });

    it('statusIcon to be: glyphicon-ok', function () {
        MainCtrl.generateCalculations();
        MainCtrl.data.generatedCalculations[1].answer = 1234;
        MainCtrl.checkAnswer('1234', 1);
        expect(MainCtrl.data.generatedCalculations[1].statusIcon).toBe('glyphicon-ok');
    });

});
