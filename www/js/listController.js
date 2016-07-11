angular.module('starter.controller', [])
  .controller('listController',function($scope, $http){
  	$http.get('/mock/list.json')
    .then(
      function (res) {
        $scope.formatData = function (arr) {
              var tempArr = [];
             for (var i = 0; i < Math.ceil(arr.length/2); i++) {
               tempArr[i] = [];
               tempArr[i].push(arr[2*i]);
               tempArr[i].push(arr[2*i+1]);              
             }
             return tempArr;
           }
        $scope.livelist = $scope.formatData(res.data.list);
      },
      function (err) {
        console.error(err);
      }
    )
  })

