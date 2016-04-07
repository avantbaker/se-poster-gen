var sportNgin = angular.module("sportNgin", ["ngResource", "ui.router"]);

sportNgin.config([
	'$stateProvider', '$urlRouterProvider',
	function ( $stateProvider, $urlRouterProvider ) {
		
		$stateProvider
		
			.state('root', {
				url: '/home',
				controller: 'homeCntrl',
				templateUrl: 'steps/container.html'
			})
			
			.state('root.start', {
				url: '/start',
				controller: 'homeCntrl',
				templateUrl: 'steps/home.html'
			})
			
			.state('root.start.welcome', {
				url: '/welcome',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-welcome.html'
			})
			
			.state('root.start.yourInfo', {
				url: '/info',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-yourInfo.html'
			})
			
			.state('root.start.selectTemplate', {
				url: '/selectTemplate',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-selectTemplate.html'
			})
			
			.state('root.start.tournamentInfo', {
				url: '/tournamentInfo',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentInfo.html'
			})
			
			.state('root.start.tournamentDes', {
				url: '/tournamentDescription',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentDes.html'
			})
			
			.state('root.start.tournamentContact', {
				url: '/tournamentContact',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentContact.html'
			});
			
		
		$urlRouterProvider.otherwise('home.start');
	}	
]);

sportNgin.service( '', function(){


});

sportNgin.controller('homeCntrl', [ "$scope", "$log", function($scope, $log){
	

	
}]);

sportNgin.controller('', [ "$scope", "$log", "$resource", function($scope, $log, $resource){
	

}]);
