angular.module('home-app', [])
  .controller('employeeController', function ($scope,$http,$log) {
    $http.get('./mock/home.json')

        .then(
        function (res) {
          $scope.home = res.data.home.subject;
          console.log(res.data.home.subject);
        },
        function (err) {
          $log.error(err)
        }
  )

  })
  .controller('xController', function ($scope,$http,$log) {
    $http.get('./mock/home.json')

        .then(
        function (res) {
          $scope.home = res.data.home.icon;
          console.log(res.data.home);
        },
        function (err) {
          $log.error(err)
        }
      )})
    .controller('yController', function ($scope,$http,$log) {
        $http.get('./mock/home.json')

            .then(
            function (res) {
              $scope.home = res.data.home;

            },
            function (err) {
              $log.error(err)
            }
          )})
          .controller('homeController', function ($scope,$http,$log) {
              $http.get('./mock/home.json')

                  .then(
                  function (res) {
                    $scope.home = res.data.home.ad;
                    console.log(res.data.home.ad);

                  },
                  function (err) {
                    $log.error(err)
                  }
                )});

  (function(win) {
      var doc = win.document;
      var docEl = doc.documentElement;
      var tid;

      function refreshRem() {
          var width = docEl.getBoundingClientRect().width;
          if (width > 540) { // 最大宽度
              width = 540;
          }
          var rem = width / 10; // 将屏幕宽度分成10份， 1份为1rem
          docEl.style.fontSize = rem + 'px';
      }

      win.addEventListener('resize', function() {
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 300);
      }, false);
      win.addEventListener('pageshow', function(e) {
          if (e.persisted) {
              clearTimeout(tid);
              tid = setTimeout(refreshRem, 300);
          }
      }, false);

      refreshRem();

  })(window);
