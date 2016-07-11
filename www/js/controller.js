angular.module('starter.controller', [])
  .controller('tabController', ['$scope', function ($scope) {

  }])
<<<<<<< HEAD
  .controller('sortController', ['$scope','$http', '$log', function ($scope,$http, $log) {

    $http.get('./mock/sort.json')
      .then(
        function (res) {
          $scope.sortlist = res.data.list;
          $scope.sortSwpier = new Swiper('.sortbanner',{
             loop:false,
             slidesPerView : 4,
             centeredSlides : true,
           });
           $scope.formatData = function (arr) {
              var tempArr = [];
             for (var i = 0; i < Math.ceil(arr.length/3); i++) {
               tempArr[i] = [];
               tempArr[i].push(arr[3*i]);
               tempArr[i].push(arr[3*i+1]);
               tempArr[i].push(arr[3*i+2]);
             }
             return tempArr;
           }
          $scope.sortDescribe0 =  $scope.formatData($scope.sortlist[0].list);
          console.log($scope.sortDescribe0);
          // for(var i,i<$scope.sortlist.length,i++){
          //   $scope.sortDescribe = $scope.sortlist[i].list;
          // }
          // console.log($scope.sortDescribe0);
          // $scope.sortDescribe = function function (arr) {
          //   var sortArr = [];
          //   for(var i,i<$scope.sortlist.length,i++){
          //     sortArr = $scope.formatData($scope.sortlist[i].list);
          //     $scope.sortDescribe = sortArr;
          //   }
          //  return sopArr;
          // }

        },
        function (err) {
          $log.error(err);
        }
      );

=======
  .controller('listController', ['$scope', function ($scope) {
    
>>>>>>> master
  }])
  .controller('guideController', ['$scope', function ($scope,$urlRouterProvider) {
    $scope.guideSwpier = new Swiper('.guide',{
       loop:false
     });
<<<<<<< HEAD

=======
>>>>>>> master
  }])
