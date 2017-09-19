
var expect = chai.expect;
describe('calculator', function () {
    
      beforeEach(module('calculatorApp'));
    
      var $controller;
    
      beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
      }));
    
      describe('sum', function () {
            

            it('Postfix cal return for 3 4 - is -1', function () {
                var $scope = {};
                var controller = $controller('CalculatorController', { $scope: $scope });
                $scope.calculator("3 4 -");
                expect($scope.message).to.equal("Expression is valid");
                expect($scope.calculatedValue).to.equal(-1);
            });
            it('Postfix value for entered blanlk value', function () {
                var $scope = {};
                var controller = $controller('CalculatorController', { $scope: $scope });
                $scope.calculator("3 4 - 4 5 * +");
                expect($scope.message).to.equal("Expression is valid");
                expect($scope.calculatedValue).to.equal(19);
            });
            it('Postfix value for entered blanlk value', function () {
                var $scope = {};
                var controller = $controller('CalculatorController', { $scope: $scope });
                $scope.calculator("4 2 + 3 5 1 -     * +");
                expect($scope.message).to.equal("Expression is valid");
                expect($scope.calculatedValue).to.equal(18);
            });
            it('Postfix value for entered blanlk value', function () {
                var $scope = {};
                var controller = $controller('CalculatorController', { $scope: $scope });
                $scope.calculator(" ");
                expect($scope.message).to.equal("Please enter some valid post fix expression");
                expect($scope.calculatedValue).to.equal("");
            });
            it('Postfix value for entered blanlk value', function () {
                var $scope = {};
                var controller = $controller('CalculatorController', { $scope: $scope });
                $scope.calculator("g h");
                expect($scope.message).to.equal("Please enter some valid post fix expression");
                expect($scope.calculatedValue).to.equal("");
            });
            
        });
    
    });