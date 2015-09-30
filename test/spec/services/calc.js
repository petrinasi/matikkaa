'use strict';

describe('Service: calc', function () {

    // load the service's module
    beforeEach(module('matikkaApp'));

    // instantiate service
    var calc;
    beforeEach(inject(function (_calc_) {
        calc = _calc_;
    }));

    it('selectedOption.id to be: 1', function () {
        expect(calc.data.selectedOption.id).toBe('1');
    });

    it('generatedCalculations length to be: 10', function () {
        calc.generateCalculations();
        expect(calc.data.generatedCalculations.length).toBe(10);
    });

    it('generated calculation list length should be: 15', function () {
        calc.data.selectedOption = calc.data.availableOptions[4];
        calc.data.config.rows = 15;
        calc.generateCalculations();
        expect(calc.data.selectedOption.id).toBe('r');
        expect(calc.data.generatedCalculations.length).toBe(15);
    });

    it('questions shouldn\'t have value smaller than 1', function () {
        var minValue = 1, nmbrOfValues = 3, arrLen = 100, tmpArr = [];

        calc.data.selectedOption = calc.data.availableOptions[2];
        calc.data.config.rows = arrLen;
        calc.data.config.minValue = minValue;
        calc.data.config.nmbrOfValues = nmbrOfValues;
        calc.generateCalculations();

        expect(calc.data.selectedOption.id).toBe('3');
        expect(calc.data.generatedCalculations.length).toBe(arrLen);

        for (var x = 0; x < arrLen; x++) {
            tmpArr = calc.data.generatedCalculations[x].question.split(" ");
            for (var y = 0; y < tmpArr.length; y++) {
                if (+tmpArr[y] === +tmpArr[y]) {
                    expect(parseInt(tmpArr[y])).toBeGreaterThan(minValue-1);
                }
            }
        }
    });

    it('questions shouldn\'t have value smaller than -1', function () {
        var minValue = -1, nmbrOfValues = 3, arrLen = 100, tmpArr = [];

        calc.data.selectedOption = calc.data.availableOptions[2];
        calc.data.config.rows = arrLen;
        calc.data.config.minValue = minValue;
        calc.data.config.nmbrOfValues = nmbrOfValues;
        calc.generateCalculations();

        expect(calc.data.selectedOption.id).toBe('3');
        expect(calc.data.generatedCalculations.length).toBe(arrLen);

        for (var x = 0; x < arrLen; x++) {
            tmpArr = calc.data.generatedCalculations[x].question.split(" ");
            for (var y = 0; y < tmpArr.length; y++) {
                if (+tmpArr[y] === +tmpArr[y]) {
                    expect(parseInt(tmpArr[y])).toBeGreaterThan(minValue-1);
                }
            }
        }
    });

    it('questions shouldn\'t have value larger than 20', function () {
        var minValue = 1, maxValue = 20, nmbrOfValues = 3, arrLen = 100, tmpArr = [];

        calc.data.selectedOption = calc.data.availableOptions[2];
        calc.data.config.rows = arrLen;
        calc.data.config.minValue = minValue;
        calc.data.config.maxValue = maxValue;
        calc.data.config.nmbrOfValues = nmbrOfValues;
        calc.generateCalculations();

        expect(calc.data.selectedOption.id).toBe('3');
        expect(calc.data.generatedCalculations.length).toBe(arrLen);

        for (var x = 0; x < arrLen; x++) {
            tmpArr = calc.data.generatedCalculations[x].question.split(" ");
            for (var y = 0; y < tmpArr.length; y++) {
                if (+tmpArr[y] === +tmpArr[y]) {
                    expect(parseInt(tmpArr[y])).toBeLessThan(maxValue+1);
                }
            }
        }
    });
});
