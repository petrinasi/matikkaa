'use strict';

/**
 * @ngdoc function
 * @name matikkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matikkaApp
 */
angular.module('matikkaApp')

    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.data = {
            availableOptions: [
                {id: '1', name: 'Yhteenlaskua'},
                {id: '2', name: 'Vähennylaskua'},
                {id: '3', name: 'Yhteen- ja vähennyslaskua'},
                {id: '4', name: 'Kertolaskua'},
//                {id: '5', name: 'Jakolaskua'},
                {id: 'r', name: 'Kaikki'}
            ],
            selectedOption: {id: '1', name: 'Yhteenlaskua'}, //This sets the default value of the select in the ui
            config: {
                length: 10,
                nmbrOfValues: 2,
                maxValue: 10
            },
            generatedCalculations: []
        };

        $scope.generateCalculations = function () {
            $scope.data.generatedCalculations = [];

            for (var i = 0; i < $scope.data.config.length; i++) {
                var questionList = [], question;
                questionList.push(Math.floor((Math.random() *  ($scope.data.config.maxValue+1))).toString());

                for (var x = 1; x < $scope.data.config.nmbrOfValues; x++) {
                    questionList.push(getMark());
                    questionList.push(Math.floor((Math.random() *
                                                  ($scope.data.config.maxValue+1))).toString());
                }

                question = questionList.toString().replace(/,/g," ");
                $scope.data.generatedCalculations.push({question: question,
                                                        answer: eval(question), userInput: ""});
            }
        };

        function getMark() {
            var id, mark;
            if ($scope.data.selectedOption.id === 'r') {
                id = Math.floor(Math.random() * $scope.data.availableOptions.length).toString();
            }
            else if ($scope.data.selectedOption.id === '3') {
                id = Math.floor(Math.random() * 3).toString();
            }
            else {
                id = $scope.data.selectedOption.id;
            }

            switch (id) {
                case '1':
                    mark = '+';
                    break;
                case '2':
                    mark = '-';
                    break;
                case '4':
                    mark = '*';
                    break;
//                case '5':
//                    mark = '/';
//                    break;
                default:
                    mark = '+';
            }
            return mark;
        }

        $scope.checkAnswer = function (userInput, index) {
            //setTimeout(function(){
            if (userInput === $scope.data.generatedCalculations[index].answer.toString()) {
                $scope.data.generatedCalculations[index].statusIcon = 'glyphicon-ok';
            }
            else {
                $scope.data.generatedCalculations[index].statusIcon = '';
            }
            //}, 1000);
        };

        $scope.generateCalculations();

    }]);
