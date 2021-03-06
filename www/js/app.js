// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controller','home-app'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function  ($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('guide',{
      url:'/guide',
      templateUrl:'./tpls/guide.html',
      controller:'guideController'
    })
    .state('list',{
      url:'/list',
      templateUrl:'./tpls/list.html',
      controller:'listController'
    })
    .state('tabs',{
      url:'/tab',
      templateUrl:'./tpls/tabs.html',
      controller:'tabController'
    })
    .state('tabs.home',{
      url:'/home',
      views:{
        'tab-home':{
          templateUrl:'./tpls/home.html'
        }
      }
    })
    .state('tabs.sort',{
      url:'/sort',
      views:{
        'tab-sort':{
          templateUrl:'./tpls/sort.html'
        }
      }
    })
    .state('tabs.subject',{
      url:'/subject',
      views:{
        'tab-subject':{
          templateUrl:'./tpls/subject.html'
        }
      }
    })
    .state('tabs.my',{
      url:'/my',
      views:{
        'tab-my':{
          templateUrl:'./tpls/my.html'
        }
      }
    })

  $urlRouterProvider.otherwise('/guide');
  // body...
});
