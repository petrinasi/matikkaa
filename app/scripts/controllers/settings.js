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
        var vm = this, from = 0, to = 100;
        var arr = (function () {
            var tmpArr = [];
            for (var x=from; x<=to; x+=20) {
                tmpArr.push(x);
            }
            return tmpArr;
        })();

        vm.config = calc.data.config;
        vm.value = vm.config.minValue.toString()+";"+vm.config.maxValue.toString();
        vm.options = {
            from: from,
            to: to,
            step: 5,
            treshold: 5,
            scale: arr
            //            callback: function(value, released) {
            //                var values = value.split(";");
            //                vm.config.minValue = +values[0];
            //                vm.config.maxValue = +values[1];
            //                console.log(value + " " + released);
            //            }
        };

        vm.updateMinMax = function() {
            var values = vm.value.split(";");
            vm.config.minValue = +values[0];
            vm.config.maxValue = +values[1];
        };
    }]);
