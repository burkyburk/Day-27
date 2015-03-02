angular.module('app.controllers', []).controller('formController', function($scope) {
	'use strict';
	$scope.submitSuccess = true;

	$scope.$watch('name', function() {
		if(angular.isUndefined($scope.name) || $scope.name === '') {
			$scope.class1 = 'errorClass';
		} else {
			$scope.class1 = 'none';
		}
	});
	$scope.$watch('email', function() {
		if(angular.isUndefined($scope.email) || $scope.email === '') {
				$scope.class2 = 'errorClass';
			}
		else {
			for(var i=0; i < $scope.email.length; i++) {
				if($scope.email.indexOf('@') === -1) {
					$scope.class2 = 'errorClass';
				} else {
					$scope.class2 = 'none';
				}
			}
		}
	});
	$scope.$watch('website', function() {
		if(angular.isUndefined($scope.website) || $scope.website === '') {
			$scope.class3 = 'errorClass';
		} else {
			if($scope.website.substring(0,7) === 'http://') {
				$scope.class3 = 'none';
			} else {
				$scope.class3 = 'errorClass';
			}
		}
	});
	$scope.$watch('message', function() {
		if(angular.isUndefined($scope.message) || $scope.message === '') {
			$scope.class4 = 'errorClass';
		} else {
			$scope.class4 = 'none';
		}
	});


	$scope.submit = function() {
		var submitPass = 0;

		var errorArray = [
			'Name cannot be left empty',
			'Email cannot be left empty',
			'Email must contain an "@"',
			'Website cannot be left empty',
			'Website must start with http://',
			'Message cannot be left empty'
		];

		if(angular.isUndefined($scope.name) || $scope.name === '') {
			$scope.error1 = errorArray[0];
		} else {
			$scope.error1 = undefined;
			submitPass++;
		}
		if(angular.isUndefined($scope.email) || $scope.email === '') {
			$scope.error2 = errorArray[1];
		}
		else {
			for(var i=0; i < $scope.email.length; i++) {
				if($scope.email.indexOf('@') === -1) {
					$scope.error2 = errorArray[2];
				} else {
					$scope.error2 = '';
					submitPass++;
					break;
				}
			}
		}
		if(angular.isUndefined($scope.website) || $scope.website === '') {
			$scope.error3 = errorArray[3];
		} else {
			if($scope.website.substring(0,7) === 'http://') {
				$scope.error3 = '';
				submitPass++;
			} else {
				$scope.error3 = errorArray[4];
			}
		}
		if(angular.isUndefined($scope.message) || $scope.message === '') {
			$scope.error4 = errorArray[5];
		} else {
			$scope.error4 = '';
			submitPass++;
		}

		if(submitPass === 4) {
			$scope.submitSuccess = false;
		}
	};

});
