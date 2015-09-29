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
        scope.data.selectedOption = scope.data.availableOptions[4];
        scope.data.config.rows = 15;
        scope.generateCalculations();
        expect(scope.data.selectedOption.id).toBe('r');
        expect(scope.data.generatedCalculations.length).toBe(15);
    });

    it('questions shouldn\'t have value smaller than 1', function () {
        var minValue = 1, nmbrOfValues = 3, arrLen = 100, tmpArr = [];

        scope.data.selectedOption = scope.data.availableOptions[2];
        scope.data.config.rows = arrLen;
        scope.data.config.minValue = minValue;
        scope.data.config.nmbrOfValues = nmbrOfValues;
        scope.generateCalculations();

        expect(scope.data.selectedOption.id).toBe('3');
        expect(scope.data.generatedCalculations.length).toBe(arrLen);

        for (var x = 0; x < arrLen; x++) {
            tmpArr = scope.data.generatedCalculations[x].question.split(" ");
            for (var y = 0; y < tmpArr.length; y++) {
                if (+tmpArr[y] === +tmpArr[y]) {
                    expect(parseInt(tmpArr[y])).toBeGreaterThan(minValue-1);
                }
            }
        }
    });

    it('questions shouldn\'t have value smaller than -1', function () {
        var minValue = -1, nmbrOfValues = 3, arrLen = 100, tmpArr = [];

        scope.data.selectedOption = scope.data.availableOptions[2];
        scope.data.config.rows = arrLen;
        scope.data.config.minValue = minValue;
        scope.data.config.nmbrOfValues = nmbrOfValues;
        scope.generateCalculations();

        expect(scope.data.selectedOption.id).toBe('3');
        expect(scope.data.generatedCalculations.length).toBe(arrLen);

        for (var x = 0; x < arrLen; x++) {
            tmpArr = scope.data.generatedCalculations[x].question.split(" ");
            for (var y = 0; y < tmpArr.length; y++) {
                if (+tmpArr[y] === +tmpArr[y]) {
                    expect(parseInt(tmpArr[y])).toBeGreaterThan(minValue-1);
                }
            }
        }
    });

    it('questions shouldn\'t have value larger than 20', function () {
        var minValue = 1, maxValue = 20, nmbrOfValues = 3, arrLen = 100, tmpArr = [];

        scope.data.selectedOption = scope.data.availableOptions[2];
        scope.data.config.rows = arrLen;
        scope.data.config.minValue = minValue;
        scope.data.config.maxValue = maxValue;
        scope.data.config.nmbrOfValues = nmbrOfValues;
        scope.generateCalculations();

        expect(scope.data.selectedOption.id).toBe('3');
        expect(scope.data.generatedCalculations.length).toBe(arrLen);

        for (var x = 0; x < arrLen; x++) {
            tmpArr = scope.data.generatedCalculations[x].question.split(" ");
            for (var y = 0; y < tmpArr.length; y++) {
                if (+tmpArr[y] === +tmpArr[y]) {
                    expect(parseInt(tmpArr[y])).toBeLessThan(maxValue+1);
                }
            }
        }
    });
/*
    it('random value should be between min and max', function () {
        var tmp;
        for (var x=0; x<500; x++) {
            tmp = MainCtrl.getRndValue(-3, 11);
            expect(tmp).toBeLessThan(12);
            expect(tmp).toBeGreaterThan(-4);
        }
    });
*/
});
