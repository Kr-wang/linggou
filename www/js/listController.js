angular.module('starter.controllerlist', [])
  .controller('listController',function($scope, $http){
  	$http.get('/mock/list.json')
    .then(
      function (res) {
        $scope.livelist = res.data.list;
      },
      function (err) {
        console.error(err);
      }
    )
  })
