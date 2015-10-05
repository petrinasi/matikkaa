'use strict';

/**
 * @ngdoc service
 * @name matikkaApp.calc
 * @description
 * # calc
 * Factory in the matikkaApp.
 */
angular.module('matikkaApp')

    .factory('calc', function () {

    var data = {
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
            rows: 10,
            nmbrOfValues: 2,
            minValue: 0,
            maxValue: 10
        },
        generatedCalculations: []
    };

    function generateCalculations() {
        data.generatedCalculations = [];
        var found = false;

        for (var i = 0; i < data.config.rows; found = false) {
            var questionList = [], question, tmpVal, tmpQuestion;
            tmpVal = getRndValue(data.config.minValue, data.config.maxValue);
            questionList.push(tmpVal.toString());

            for (var x = 1; x < data.config.nmbrOfValues; x++) {
                questionList.push(getMark());
                tmpVal = getRndValue(data.config.minValue, data.config.maxValue);
                questionList.push(tmpVal.toString());
            }

            question = questionList.toString().replace(/,/g," ");
            tmpQuestion = {question: question, answer: eval(question), userInput: ""};

            for (var y = 0; y < i; y++) {
                if (data.generatedCalculations[y].question === tmpQuestion.question) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                i++;
                data.generatedCalculations.push(tmpQuestion);
            }
        }
    }

    function getRndValue(minVal, maxVal) {
        return Math.floor((Math.random() * maxVal)+minVal);
    }

    function getMark() {
        var id, mark;
        if (data.selectedOption.id === 'r') {
            id = Math.floor(Math.random() * data.availableOptions.length).toString();
        }
        else if (data.selectedOption.id === '3') {
            id = Math.floor(Math.random() * 3).toString();
        }
        else {
            id = data.selectedOption.id;
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

    function checkAnswer(userInput, index) {
        //setTimeout(function(){
        if (userInput === data.generatedCalculations[index].answer.toString()) {
            data.generatedCalculations[index].statusIcon = 'glyphicon-ok';
        }
        else {
            data.generatedCalculations[index].statusIcon = '';
        }
        //}, 1000);
    }

    return {
        data: data,
        generateCalculations: function () {
            return generateCalculations();
        },
        checkAnswer: function(input, index) {
            return checkAnswer(input, index);
        }
    };
});
