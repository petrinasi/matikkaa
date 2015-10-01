'use strict';

/**
 * @ngdoc function
 * @name matikkaApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the matikkaApp
 */
angular.module('matikkaApp')
    .controller('SettingsCtrl', ['calc', function(calc) {
        var vm = this;
        vm.config = calc.data.config;
    }]);
