'use strict';

/**
 * @ngdoc function
 * @name matikkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matikkaApp
 */
angular.module('matikkaApp')
    .controller('MainCtrl', ['calc', function(calc) {
        var vm = this;
        vm.data = calc.data;
        vm.checkAnswer = calc.checkAnswer;
        vm.generateCalculations = calc.generateCalculations;

        vm.generateCalculations();
    }]);
