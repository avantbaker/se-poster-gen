var sportNgin = angular.module("sportNgin", ["ngResource", "ui.router", "ngAnimate", "ngCookies"]);

sportNgin.config([
	'$stateProvider', 
	'$urlRouterProvider', 
	'$httpProvider',
	function ( $stateProvider, $urlRouterProvider, $httpProvider ) {
}]);

sportNgin.controller('downloadCntrl', [ 
	"$scope", 
	"$cookies", 
	function($scope, $cookies){

		var cookieObj = $cookies.getAll();

		$scope.userId = cookieObj.userID;
	
}]);

sportNgin.run([
	'$rootScope', 
	'$state', 
	'$stateParams',
    function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
]);


