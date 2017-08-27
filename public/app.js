'use strict';
var myApp = angular.module('myApp', ['ui.router', 'ngStorage', 'ngTable']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('app', {
        url: '/',
        templateUrl: 'app/app.html',
        controller: 'AppCtrl'
    })
    .state('items', {
        url: '/items',
        templateUrl: 'app/item/item.html',
        controller: 'ItemCtrl'
    })
    .state('itemDetails', {
        url: "/itemDetails",
        templateUrl: 'app/item/itemDetail.html',
        controller: 'ItemDetailsCtrl',
        params : { veryLongParamParent: null, },
    })
    .state('order', {
        url: '/order',
        templateUrl: 'app/order/order.html',
        controller: 'OrderCtrl'
    })
    .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
    })
    .state('cart', {
        url: '/cart',
        templateUrl: 'app/cart/cart.html',
        controller: 'CartCtrl'
    });
    
}).run(function () {

}); 
