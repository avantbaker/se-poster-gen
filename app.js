var sportNgin = angular.module("sportNgin", ["ngResource", "ui.router"]);

sportNgin.config([
	'$stateProvider', '$urlRouterProvider',
	function ( $stateProvider, $urlRouterProvider ) {
		
		$stateProvider
		
			.state('root', {
				abstract: true,
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
			
		
		$urlRouterProvider.otherwise('home/start/info');
	}	
]);

sportNgin.service( '', function(){


});

sportNgin.controller('homeCntrl', [ "$scope", "$log", "$rootScope", function($scope, $log, $rootScope){
	
	/**
	 * Set Model inital values
	 * @type {object}
	 */
	$scope.Model = $scope.Model || { 	firstName 			: "",
									 	lastName 			: "",
									 	tournamentName 		: "",
									 	city				: "",
									 	state				: "",
									 	startDate			: new Date(2016, 4, 15),
									 	endDate				: new Date(2016, 4, 18),
									 	description 		: "",
									 	numOfTeams  		: "",
									 	gameMin				: "",
									 	registerBy			: new Date(2016, 0, 6),
									 	entryFee 			: "",
									 	tphone 				: "",
									 	dirFirstName 		: "",
									 	dirLastName 		: "",
									 	tEmail 				: "",
									 	twebsiteName		: ""
								   };
								   
	$scope.greeting = "Hello world!";						   
}]);

sportNgin.run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]);
