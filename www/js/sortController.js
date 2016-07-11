angular.module('starter.controllersort', [])
  .controller('tabController', ['$scope', function ($scope) {

  }])
  .controller('guideController', ['$scope', function ($scope,$urlRouterProvider) {
    $scope.guideSwpier = new Swiper('.guide',{
       loop:false
     });
   }])
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
          //
          // for(var i,i<$scope.sortlist.length,i++){
          //   var sortDescribe = [];
          //   $scope.sortDescribe = $scope.formatData($scope.sortlist[i].list);
          // }
          $scope.formatData2 = function (arr) {
            var tempArr = [];
              var temps = [];
            for (var i = 0; i < (arr.length); i++) {
              tempArr[i] = [];
              // var temps = $scope.formatData(arr[i].list);
              for (var j = 0; j < Math.ceil(arr[i].list.length/3); j++) {
                temps[j] = [];
                temps[j].push(arr[i].list[3*j]);
                temps[j].push(arr[i].list[3*j+1]);
                temps[j].push(arr[i].list[3*j+2]);
                tempArr[i].push(temps[j]);
              }
            }
            return tempArr;
          }
          $scope.alldata = $scope.formatData2($scope.sortlist);
          console.log($scope.alldata);
        },
        function (err) {
          $log.error(err);
        }
      );
}])
