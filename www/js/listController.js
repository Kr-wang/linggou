angular.module('starter.controller', [])
  .controller('listController',function($scope, $http){
  	$http.get('/mock/list.json')
    .then(
      function (res) {
      	console.log(res.data.list[1].default_image)
        $scope.livelist = res.data.list;
      },
      function (err) {
        console.error(err);
      }
    )
  })

