"use strict";
exports.__esModule = true;
exports.sumArray = void 0;
var numberList = [3, 5, -4, 8, 11, 1, -1, 6, 1, 2, 3, 4, 5, 6];
var sumArray = function (arr, targetSum) {
    var result = [];
    var secondaryValue = 0;
    var operators = ["+", "-", "*", "/"];
    var ordedArr = arr.sort(function (a, b) { return a - b; });
    while (ordedArr.length > secondaryValue) {
        var _loop_1 = function (i) {
            operators.forEach(function (operator) {
                if (Number(eval("".concat(ordedArr[i], " ").concat(operator, " ").concat(ordedArr[secondaryValue]))) === targetSum) {
                    var resultString = "".concat(String(ordedArr[i]).length < 2
                        ? "0" + String(ordedArr[i])
                        : String(ordedArr[i]), " ").concat(operator, " ").concat(String(ordedArr[secondaryValue]).length < 2
                        ? "0" + ordedArr[secondaryValue]
                        : arr[secondaryValue]);
                    console.log(resultString, "=", eval("".concat(arr[i], " ").concat(operator, " ").concat(arr[secondaryValue], " \n")));
                    result.push(resultString);
                }
            });
        };
        for (var i = 0; i < ordedArr.length; i++) {
            _loop_1(i);
        }
        secondaryValue++;
    }
    console.log(result);
    return result;
};
exports.sumArray = sumArray;
(0, exports.sumArray)(numberList, 10);
exports["default"] = exports.sumArray;
