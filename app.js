var sportNgin = angular.module("sportNgin", ["ngResource", "ui.router", "ngAnimate"]);

sportNgin.config([
	'$stateProvider', '$urlRouterProvider',
	function ( $stateProvider, $urlRouterProvider ) {
		
		$stateProvider
			.state('info', {
				url: '/home',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-yourInfo.html'
			})
			
			.state('templateSelect', {
				url: '/template',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-selectTemplate.html'
			})
			
			.state('tournamentInfo', {
				url: '/tournamentInfo',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentInfo.html'
			})
			
			.state('tournamentDescription', {
				url: '/tournamentDescription',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentDes.html'
			})
			
			.state('tournamentContact', {
				url: '/tournamentContact',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentContact.html'
			});

		$urlRouterProvider.otherwise('home');
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

sportNgin.factory('html2pdf', ['$rootScope', '$http', function($rootScope, $http){
	var service = this;
	
	service.convert = function(formData) {
        var data = formData;

        $http.post('pdf_templates/test.php', data)
        .success(function(data, status, headers, config)
        {
            console.log(status + ' - ' + data);
        })
        .error(function(data, status, headers, config)
        {
            console.log('error');
        });
    }

    return service;
}]);

sportNgin.controller('homeCntrl', [ "$scope", "$log", "$rootScope", "sportNginModel", "html2pdf", function($scope, $log, $rootScope, sportNginModel, html2pdf){
	
	/**
	 * Set Model inital values
	 * @type {object}
	 */
	$scope.Model = $scope.Model || sportNginModel.getFormFields();
	$scope.template1 = true;
	$scope.template2 = false;	
	$rootScope.template2active = false;
	$rootScope.template1active = true;
	
	/**
	 * Template selection function
	 * @return {[type]} [description]
	 */
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

	$scope.generatePdf = function() {
		return html2pdf.convert($scope.Model);
	}
}]);

sportNgin.run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]);
