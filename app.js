var sportNgin = angular.module("sportNgin", ["ngResource", "ui.router"]);

sportNgin.config([
	'$stateProvider', '$urlRouterProvider',
	function ( $stateProvider, $urlRouterProvider ) {
		
		$stateProvider
		
			
			.state('home', {
				url: '/home',
				controller: 'homeCntrl',
				templateUrl: 'steps/home.html'
			})
			
			.state('home.welcome', {
				url: '/welcome',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-welcome.html'
			})
			
			.state('home.yourInfo', {
				url: '/info',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-yourInfo.html'
			})
			
			.state('home.selectTemplate', {
				url: '/selectTemplate',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-selectTemplate.html'
			})
			
			.state('home.tournamentInfo', {
				url: '/tournamentInfo',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentInfo.html'
			})
			
			.state('home.tournamentDes', {
				url: '/tournamentDescription',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentDes.html'
			})
			
			.state('home.tournamentContact', {
				url: '/tournamentContact',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentContact.html'
			});
			
		
		$urlRouterProvider.otherwise('/home/welcome');
	}	
]);

sportNgin.service( '', function(){


});

sportNgin.controller('homeCntrl', [ "$scope", "$log", function($scope, $log){
	

	
}]);

sportNgin.controller('', [ "$scope", "$log", "$resource", function($scope, $log, $resource){
	

}]);
