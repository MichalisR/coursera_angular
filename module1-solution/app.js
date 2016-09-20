(function () {
'use strict';

angular.module('LunchCheck', []);

.controller("LunchCheckController", LunchCheckFunction);

LunchCheckFunction.$inject = ["$scope"];

function LunchCheckFunction($scope) {
	$scope.dishes = "";

	$scope.checkLunch = function () {
		var my_dishes = $scope.dishes.split(",");
		if(my_dishes.length == 1 && my_dishes[0] == "") {
			$scope.lunchMessage = "Please enter data first";
		} else if(my_dishes.length <= 3) {
			$scope.lunchMessage = "Enjoy!";
		} else {
			$scope.lunchMessage = "Too much!";
		}
	}
}
})();