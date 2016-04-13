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
									 	registerBy			: "",
									 	entryFee 			: "",
									 	tphone 				: "",
									 	dirFirstName 		: "",
									 	dirLastName 		: "",
									 	tEmail 				: "",
									 	twebsiteName		: ""
								   };

	//create pdf
	// function createPDF(){
	//  getCanvas().then(function(canvas){
	//   var 
	//   img = canvas.toDataURL("image/png"),
	//   doc = new jsPDF({
	//           unit:'px', 
	//           format:'a4'
	//         });     
	//         doc.addImage(img, 'JPEG', 20, 20);
	//         doc.save('techumber-html-to-pdf.pdf');
	//         canvas.width(cache_width);
	//  });
	// }
	 
	// create canvas object
	// function getCanvas(){
	//  canvas.width((a4[0]*1.33333) -80).css('max-width','none');
	//  return html2canvas(canvas,{
	//      imageTimeout:2000,
	//      removeContainer:true
	//     }); 
	// }

	// $('#createTemp').on('click',function(){
	// 	 $('body').scrollTop(0);
	// 	 createPDF();
	// });


	// $rootScope.setInitVals = function() {
	// 	if( $scope.Model.firstName === '' ) {
	// 		$scope.Model.firstName =
	// 	}
	// }

}]);

sportNgin.run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]);
