angular.module('starter.controller', [])
  .controller('tabController', ['$scope', function ($scope) {

  }])
  .controller('guideController', ['$scope', function ($scope,$urlRouterProvider) {
    $scope.guideSwpier = new Swiper('.guide',{
       loop:false
     });
   }])
