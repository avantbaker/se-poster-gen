var sportNgin = angular.module("sportNgin", ["ngResource", "ngRoute"]);

sportNgin.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeCntrl'
	})

});

sportNgin.service( '', function(){


});

sportNgin.controller('homeCntrl', [ "$scope", "$routeParams", "$log", function($scope, $routeParams, $log){
	

	
}]);

sportNgin.controller('', [ "$scope", "$log", "$resource", "$routeParams", function($scope, $log, $resource, $routeParams){
	

}]);
