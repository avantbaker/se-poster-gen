var sportNgin = angular.module("sportNgin", ["ngResource", "ui.router", "ngAnimate"]);

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

sportNgin.service('sportNginModel', function(){
	var service = this;

	formFields = { 	
					firstName 			: "",
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
				 	twebsiteName		: "",
				 	personalEmail       : "",
				 	personalPhone       : "",
				 	hostOrg   			: "",
				 	includeFee  		: "",
				 	includeDeadline 	: "",
				 	includeGames  		: "",
				 	includeFirst 		: "",
				 	includeLast 		: "",
				 	includeEmail 		: "",
				 	includePhone 		: "",
				 	includeWebsite 		: ""
			   };

	service.getFormFields = function () {
		return formFields;
	};

});

sportNgin.factory('broadcastService', ['$rootScope', function($rootScope){
	var broadcastService = {};

}]);

sportNgin.controller('homeCntrl', [ "$scope", "$log", "$rootScope", "sportNginModel", function($scope, $log, $rootScope, sportNginModel){
	
	/**
	 * Set Model inital values
	 * @type {object}
	 */
	$scope.Model = $scope.Model || sportNginModel.getFormFields();
	$scope.template1 = true;
	$scope.template2 = false;	
	$rootScope.template2active = false;
	$rootScope.template1active = true;
	
	$scope.activeButton = function() {
		if($scope.template1) {
			$scope.template1 = !$scope.template1;
			$scope.template2 = true;
			$rootScope.template1active = !$rootScope.template1active;
			$rootScope.template2active = true;
			// $scope.template2active = !$scope.template2active;
		} else {
			$scope.template2 = !$scope.template2;
			$scope.template1 = true;
			$rootScope.template1active = true;
			$rootScope.template2active = !$rootScope.template2active;
			// $scope.template1active = !$scope.template1active;
		}
	};


}]);

sportNgin.run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]);
