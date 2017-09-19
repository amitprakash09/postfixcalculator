var calculatorApp = angular.module('calculatorApp', []);

calculatorApp.controller('CalculatorController', function ($scope) {
    $scope.message = "";
    $scope.userInput = "";
    $scope.flag = true;
    $scope.calculatedValue;
    $scope.calculated;
    $scope.calculator = function (temp) {

        var expression = temp;
        expression = expression.replace(/\s+/g, ' ').trim();
        $scope.flag = false;
        var patern = /[a-z]/g;
        var result = expression.match(patern);
        expression = expression.split(" ");
        var countoperand = 0;
        var countoperator = 1;
        $scope.calculatedValue = "";
        if ((isNaN(expression[0]))) {
            $scope.message = "Please enter some valid post fix expression";
            $scope.flag = true;
            return;
        }
        for (i = 0; i < expression.length; i++) {

            if ((!(isNaN(expression[i]))) && (expression[i] != " ")) {
                countoperand++;

            }
            if (expression[i] == '+' || expression[i] == '-' || expression[i] == '/' || expression[i] == '*') {

                countoperator++;
            }
        }

        if (countoperand == countoperator) {

        }

        else {

            $scope.message = "Please enter some valid post fix expression";
            $scope.flag = true;

            return;

        }



        var array = new Array();


        if (expression == "" || expression == null || result != null) {

            $scope.message = "Please enter some valid post fix expression";
            $scope.flag = true;

            return;

        }
        $scope.flag = false;
        $scope.message = "Expression is valid";

        $scope.calculated = $scope.calculate(expression);


    };

    $scope.calculate = function (expression) {
        var array = new Array();


        for (i in expression) {

            if (expression[i] != "+" && expression[i] != "*" && expression[i] != "-" && expression[i] != "/") {
                array.push(parseInt(expression[i]));
            } else {
                var operator = expression[i];
                var operand2 = array.pop();
                var operand1 = array.pop();
                switch (operator) {
                    case "+":
                        array.push(eval("operand1 + operand2"));
                        break;
                    case "*":
                        array.push(eval("operand1 * operand2"));
                        break;
                    case "-":
                        array.push(eval("operand1 - operand2"));
                        break;
                    case "/":
                        array.push(eval("operand1 / operand2"));
                        break;
                }
            }

        }

        $scope.calculatedValue = array[0];

        return $scope.calculatedValue;
    };


});