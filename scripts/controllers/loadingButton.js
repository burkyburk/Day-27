angular.module('app.controllers', []).controller('buttonController', function($scope, $timeout) {

  $scope.buttonText = "Submit";
  $scope.isLoading = "Loading...";
  $scope.disableButton = false;

  $scope.onClick = function() {
    $scope.disableButton = true;
    $scope.buttonText = $scope.isLoading;
    $timeout(function(){
      $scope.disableButton = false;
      $scope.buttonText = "Submit"; }, 4000);
  };
}).controller('tabController', function($scope) {

  $scope.showOrNot = true;

  $scope.onClick = function(tabNum) {
    console.log('click');
    if(tabNum === 1) {
      $scope.show1 = !$scope.show1;
      $scope.show2 = false;
      $scope.show3 = false;
    }
    else if(tabNum === 2) {
      $scope.show2 = !$scope.show2;
      $scope.show1 = false;
      $scope.show3 = false;
    }
    else {
      $scope.show3 = !$scope.show3;
      $scope.show2 = false;
      $scope.show1 = false;
    }
    $scope.showOrNot = !$scope.showOrNot;
    console.log($scope.showOrNot);
  };

}).controller('likeButtonCtrl', function($scope) {

  $scope.count = 0;
  $scope.like = 'Likes';

  $scope.onClick = function() {
    $scope.count++;
    if($scope.count === 1) {
      $scope.like = 'Like';
    } else {
      $scope.like = 'Likes';
    }
  };
});
