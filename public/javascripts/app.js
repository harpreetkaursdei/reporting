// app.js
/**************
CREATED :6 April 2016
CREATED BY: Deepak khokhar
Montive: It defined routes to call different files.It will provide you directions where to go.
********************/
'use strict';
angular.module("communicationModule", []);
// Declare app level module which depends on filters, and services

var routerApp = angular.module('alisthub', ['angular-loading-bar','ngRoute','autocomplete','ngSanitize','ui.router','ngStorage','oc.lazyLoad','communicationModule', 'ui.bootstrap','ckeditor','angularUtils.directives.dirPagination','angularjs-dropdown-multiselect','oitozero.ngSweetAlert','ngAnimate','ngDialog','ngLodash','angular-confirm','angular-svg-round-progressbar'])



.config(function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider,$httpProvider,cfpLoadingBarProvider) {
     $urlRouterProvider.otherwise('/login');
  delete $httpProvider.defaults.headers.common['X-Requested-With'];  

 cfpLoadingBarProvider.includeSpinner = false;
 cfpLoadingBarProvider.latencyThreshold = 500;

    // You can also load via resolve
    $stateProvider.
    //login screen
      state('login', {
        url: "/login", // root route
        views: {
          "lazyLoadView": {
            controller: 'loginController', // This view will use AppCtrl loaded below in the resolve
            templateUrl: 'modules/authentication/views/login.html'
          }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          resources: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('modules/authentication/controller.js');
          }]
        }
      })
       //Authentication screen=================================
        .state('signup', {
            url: '/signup',
            
            views: {
          "lazyLoadView": {
            controller: 'signupcontroller', // This view will use AppCtrl loaded below in the resolve
            templateUrl: 'modules/authentication/views/signup.html'
          }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          resources: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('modules/authentication/controller.js');
          }]
        }
        })
        
        //Email Confirmation screen=================================
        .state('confirm_email', {
            url: '/confirm_email/:id',
            views: {
          "lazyLoadView": {
            controller: 'loginController', // This view will use AppCtrl loaded below in the resolve
            templateUrl: 'modules/authentication/views/login.html'
          }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          resources: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('modules/authentication/controller.js');
          }]
        }        
        })
                
        //Authentication screen=================================
        .state('forgot-password', {
            url: '/forgot-password',
            
            views: {
          "lazyLoadView": {
            controller: 'forgotcontroller', // This view will use AppCtrl loaded below in the resolve
            templateUrl: 'modules/authentication/views/forgot.html'
          }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          resources: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('modules/authentication/controller.js');
          }]
        }
        })
        // New Password
        .state('new_password', {
            url: '/forget_password/:id',
            
            views: {
          "lazyLoadView": {
            controller: 'forgotcontroller', // This view will use AppCtrl loaded below in the resolve
            templateUrl: 'modules/authentication/views/newpassword.html'
          }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          resources: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('modules/authentication/controller.js');
          }]
        }
        })
            
         //User dashoard screen=================================
     

        .state('dashboard', {
            url: '/dashboard',
            
            views: {
                "lazyLoadView": {
                  controller: 'homeController', // This view will use AppCtrl loaded below in the resolve
                  templateUrl: 'modules/home/views/dashboard.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
              resources: ['$ocLazyLoad', '$injector',function($ocLazyLoad, $injector) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load('modules/home/service.js')/*.then(function(){
                    //var $serviceTest = $injector.get("CustomerFirstLoad");
                           // return $serviceTest.testLoad(); // <-- CHANGED HERE
                    })*/.then(function(){
                    return $ocLazyLoad.load(['modules/home/controller.js','stylesheets/home.css']);
                    })
               
              }]
            }
        })
        //Network Preview
         .state('reports', {
            url: '/reports',
            
            views: {
                "lazyLoadView": {
                  controller: 'reportsController', // This view will use AppCtrl loaded below in the resolve
                  templateUrl: 'modules/reports/views/listing.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
              resources: ['$ocLazyLoad', '$injector',function($ocLazyLoad, $injector) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load('modules/reports/service.js')/*.then(function(){
                    //var $serviceTest = $injector.get("CustomerFirstLoad");
                           // return $serviceTest.testLoad(); // <-- CHANGED HERE
                    })*/.then(function(){
                    return $ocLazyLoad.load(['modules/reports/controller.js']);
                    })
               
              }]
            }
        })

        .state('reportdetails', {
            url: '/reportdetails/:campaignid/:networkid',
            
            views: {
                "lazyLoadView": {
                  controller: 'keywordreportsController', // This view will use AppCtrl loaded below in the resolve
                  templateUrl: 'modules/keywordreports/views/keywordslisting.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
              resources: ['$ocLazyLoad', '$injector',function($ocLazyLoad, $injector) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load('modules/keywordreports/service.js')/*.then(function(){
                    //var $serviceTest = $injector.get("CustomerFirstLoad");
                           // return $serviceTest.testLoad(); // <-- CHANGED HERE
                    })*/.then(function(){
                    return $ocLazyLoad.load(['modules/keywordreports/controller.js']);
                    })
               
              }]
            }
        })


        .state('configureaccount', {
            url: '/configureaccount',
            
            views: {
                "lazyLoadView": {
                  controller: 'accountsController', // This view will use AppCtrl loaded below in the resolve
                  templateUrl: 'modules/configureaccounts/views/index.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
              resources: ['$ocLazyLoad', '$injector',function($ocLazyLoad, $injector) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load('modules/configureaccounts/service.js')/*.then(function(){
                    //var $serviceTest = $injector.get("CustomerFirstLoad");
                           // return $serviceTest.testLoad(); // <-- CHANGED HERE
                    })*/.then(function(){
                    return $ocLazyLoad.load(['modules/configureaccounts/controller.js']);
                    })
               
              }]
            }
        })

        .state('eventbrite', {
            url: '/eventbrite',
            
            views: {
                "lazyLoadView": {
                  controller: 'accountsController', // This view will use AppCtrl loaded below in the resolve
                  templateUrl: 'modules/configureaccounts/views/eventbrite.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
              resources: ['$ocLazyLoad', '$injector',function($ocLazyLoad, $injector) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load('modules/configureaccounts/service.js')/*.then(function(){
                    //var $serviceTest = $injector.get("CustomerFirstLoad");
                           // return $serviceTest.testLoad(); // <-- CHANGED HERE
                    })*/.then(function(){
                    return $ocLazyLoad.load(['modules/configureaccounts/controller.js']);
                    })
               
              }]
            }
        })
    
  }).run(['$rootScope', '$location','$state', '$localStorage',function($rootScope,$location, $state,$localStorage) {
    //To add class
    if($localStorage.isuserloggedIn){
        $rootScope.menu=$rootScope.after_login_footer_div=false;
        $rootScope.footer_login_div=true;
        $rootScope.email=$localStorage.email;
        $rootScope.name=$localStorage.name;
        $rootScope.access_token=$localStorage.access_token;
        $rootScope.phone_no=$localStorage.phone_no;
        $rootScope.userId=$localStorage.userId;
        $rootScope.address=$localStorage.address;
        $rootScope.class_status = false;
        $state.go('dashboard');
    }else{
       $rootScope.menu=$rootScope.after_login_footer_div=true;
       $rootScope.footer_login_div=false; 
    }
    
    $rootScope.logout=function(){
        $localStorage.isuserloggedIn=$rootScope.isuserloggedIn=$rootScope.footer_login_div=false;
        $localStorage.menu=$localStorage.after_login_footer_div=$rootScope.menu=$rootScope.after_login_footer_div=true;
       localStorage.clear();
        $state.go('login');
    }
    }]);
