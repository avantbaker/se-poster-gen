var sportNgin = angular.module("sportNgin", ["ngResource", "ui.router", "ngAnimate"]);

sportNgin.config([
	'$stateProvider', 
	'$urlRouterProvider', 
	'$httpProvider',
	function ( $stateProvider, $urlRouterProvider, $httpProvider ) {
		$urlRouterProvider.otherwise('home');

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

		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	}	
]);

sportNgin.service('sportNginModel', 
	function(){

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
				 	includeWebsite 		: "",
				 	template 			: "one"
			   };

	service.getFormFields = function () {
		return formFields;
	};

});

sportNgin.factory('html2pdf', [
	'$rootScope', 
	'$http', 
	'$log', 
	function($rootScope, $http, $log){

	var service = this;
	
	service.convert = function(formData) {
        var data = formData;

        $http.post('pdf_templates/poster-letter.php', data)
        // $http.post('mpdf/examples/example02_CSS_styles.php', data)
        .success(function(data, status, headers, config)
        {
            $log.log(status);
            $log.log(headers);
            $log.log(data);
        })
        .error(function(data, status, headers, config)
        {
            $log.log('error');
        });
    }

    return service;
}]);

sportNgin.factory('SNjquery', function(){
	var snJquery = this;

	snJquery.init = function(){
		angular.element(document).ready(function () {

			// Explicitly set class for mobile and desktop browsers
		  	var isMobile = {
				Android: function() {
				    return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function() {
				    return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function() {
				    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function() {
				    return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function() {
				    return navigator.userAgent.match(/IEMobile/i);
				},
				any: function() {
				    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
			};


			if(isMobile.any()) {
				$("body").addClass("mobile");
			}
			else {
				$("body").addClass("desktop");
			}

		  	// Replace img SVG with PNG on unsupported browsers
		  	if(!Modernizr.svg) {
			    $('img[src*="svg"]').attr('src', function() {
			      return $(this).attr('src').replace('.svg', '.png');
			    });
		  	}
			
			//Match Hero height to header
			var headerHeight = $("header").outerHeight();
			$( ".poster-builder-hero").height(headerHeight + "px");
			
			// Parallax effect on hero
			$(window).scroll(function() {
		      var s = $(window).scrollTop();
		      $( ".poster-builder-hero" ).css("-webkit-transform", "translateY(" + -(s*.25) + "px)");
		      $( ".poster-builder-hero" ).css("transform", "translateY(" + -(s*.25) + "px)");
		    })
		    
		    // Adjust font-size in poster based on size in container 
		    setTimeout(function() {
			    var posterWidth = $( ".poster-canvas" ).width();
				var fontPercent = (posterWidth / 612) * 100
		    	$( ".poster-canvas" ).css('font-size', fontPercent + "%");
			}, 200);
			
			$(window).resize(function(){
				setTimeout(function() {
			    	var posterWidth = $( ".poster-canvas" ).width();
					var fontPercent = (posterWidth / 612) * 100
			    	$( ".poster-canvas" ).css('font-size', fontPercent + "%");
				}, 50);
			});
			
			// Add spacer height for fixed footer
			var footerHeight = $("footer").outerHeight();
			$( ".page-wrapper" ).css('margin-bottom', footerHeight + "px");
			
			$(window).resize(function(){
		    	var footerHeight = $("footer").outerHeight();
				$( ".page-wrapper" ).css('margin-bottom', footerHeight + "px");
			});
			
			// Slide in toggle nav on scroll (mobile-only)
			$(window).scroll(function () {
				if ($(this).scrollTop() > 250) {
					$( ".poster-preview-toggle" ).addClass("viewable");
				} else {
					$( ".poster-preview-toggle" ).removeClass("viewable");
				}
			});
			var windowWidth = $(window).width();
			if(windowWidth < 900){
				// setTimeout(function(){
					$( ".poster-canvas" ).appendTo(".approval-inner");
				// }, 3600);
			}
			
			$(window).resize(function(){
		    	var windowWidth = $(window).width();
				if(windowWidth < 900){
					$( ".poster-canvas" ).appendTo(".approval-inner");
				}
			});

			var windowWidth = $(window).width();
			if(windowWidth > 900){
				$( '#approval-trigger' ).on('click', function(e) {
				    e.preventDefault();
				    var offsetY = window.pageYOffset
				    var posterWidth = $( '.poster-canvas' ).outerWidth();
					$( "body" ).css({'top': -offsetY + 'px'});
				    $( "body, html" ).addClass("no-scroll");
				    $( ".poster-canvas").css('width', posterWidth + "px");
				    setTimeout(function(){
					   $( "body" ).addClass("approval-state"); 
				    }, 100);
				    setTimeout(function(){
					   var posterHeight = $( '.poster-canvas' ).outerHeight();
					   $( ".approval-inner").css('min-height', posterHeight + "px");
					}, 400);
				});
			} else {
				$( '#approval-trigger' ).on('click', function(e) {
				    e.preventDefault();
				    var offsetY = window.pageYOffset
				    $( ".poster-preview-toggle" ).addClass("stuck");
				    $( "body" ).css({'top': -offsetY + 'px'});
				    $( "body, html" ).addClass("no-scroll");
				    setTimeout(function(){
					   $( "body" ).addClass("approval-state"); 
				    }, 100);
				});
			}

			var windowWidth = $(window).width();
			if(windowWidth > 900){
				$( '#approval-close' ).on('click', function(e) {
				    e.preventDefault();
				    var x = $('body').css('top');
				    var y = x.replace(/-/gi, '');
				    var pagePos = y.replace(/px/gi, '');
				    $( "body, html" ).removeClass("no-scroll");
				    $( "body" ).removeClass("approval-state");
				    $( ".poster-canvas").css("width", ""); 
				    $(window).scrollTop(pagePos);
				});
			} else {
				$( '#approval-close' ).on('click', function(e) {
				    e.preventDefault();
				    var x = $('body').css('top');
				    var y = x.replace(/-/gi, '');
				    var pagePos = y.replace(/px/gi, '');
				    $( "body, html" ).removeClass("no-scroll");
				    $(window).scrollTop(pagePos);
				    $( "body" ).removeClass("approval-state");
				     setTimeout(function(){
					   $( ".poster-preview-toggle" ).removeClass("stuck");
				    }, 100);
				});	
			}
			
			// Preview State
			$( '#preview-trigger' ).on('click', function(e) {
			    e.preventDefault();
			    var offsetY = window.pageYOffset
			    $( ".poster-preview-toggle" ).addClass("stuck");
			    $( "body" ).css({'top': -offsetY + 'px'});
			    $( "body, html" ).addClass("no-scroll");
			    setTimeout(function(){
				   $( "body" ).addClass("preview-state"); 
			    }, 100);
			});
			
			$( '#builder-trigger' ).on('click', function(e) {
			    e.preventDefault();
			    var x = $('body').css('top');
			    var y = x.replace(/-/gi, '');
			    var pagePos = y.replace(/px/gi, '');
			    $( "body, html" ).removeClass("no-scroll");
			    $(window).scrollTop(pagePos);
			    $( "body" ).removeClass("preview-state");
			     setTimeout(function(){
				   $( ".poster-preview-toggle" ).removeClass("stuck");
			    }, 100);
			});

		});
	};

	return snJquery;
});

sportNgin.factory('changeTemplate', [
	'$rootScope',
	'$log', 
	function($rootScope, $log){

	var service = this;
	
	/**
	 * Objective of this service is to share the template variables between the
	 * pdf controller and the home controller. It should live update the variable in both controllers.
	 * essentially when a template is selected it changes the value of that template variable to true.
	 * 
	 * @return {[type]} [description]
	 */
	service.props = {
		template1: true,
		template2: false,
		activeTemplate: 'one'
	};

	service.prepForBroadcast = function() {
		if( service.props.template1 === true ) {
			service.props.template1 = false;
			service.props.template2 = true;
			service.props.activeTemplate = 'two';
			service.changeTemplate();
		} else {
			service.props.template1 = true;
			service.props.template2 = false;
			service.props.activeTemplate = 'one';
			service.changeTemplate();
		}
	};

	service.changeTemplate = function() {
		$rootScope.$broadcast('templateChange');
	};

    return service;
}]);

sportNgin.controller('pdfCntrl', [ 
	"$scope", 
	"$log", 
	"$rootScope", 
	"sportNginModel", 
	"html2pdf",
	"$stateParams",
	"$state",
	"$timeout",
	"SNjquery",
	"changeTemplate", 
	function($scope, $log, $rootScope, sportNginModel, html2pdf, $stateParams, $state, $timeout, SNjquery, changeTemplate){

		$scope.Model = $scope.Model || sportNginModel.getFormFields();

		$scope.template1 = true;
		$scope.template2 = false;

		$scope.$on('templateChange', function(){
			$scope.template1 = changeTemplate.props.template1;
			$scope.template2 = changeTemplate.props.template2;
			$scope.Model.template = changeTemplate.props.activeTemplate;
		})
}]);

sportNgin.controller('homeCntrl', [ 
	"$scope", 
	"$log", 
	"$rootScope", 
	"sportNginModel", 
	"html2pdf",
	"$stateParams",
	"$state",
	"$timeout",
	"SNjquery",
	"changeTemplate",  
	function($scope, $log, $rootScope, sportNginModel, html2pdf, $stateParams, $state, $timeout, SNjquery, changeTemplate ){
	/**
	 * Set Model, template1, template2, and activeTemplate initial values
	 */
	$scope.Model = $scope.Model || sportNginModel.getFormFields();
	// $scope.props = changeTemplate.getProps();
	$scope.template1 = true;
	$scope.template2 = false;
	$scope.activeTemplate = '';

	$scope.$on('templateChange', function() {
        $scope.template1 = changeTemplate.props.template1;
        $scope.template2 = changeTemplate.props.template2;
        $scope.Model.template = changeTemplate.props.activeTemplate;
    });

	/**
	 * Initalize custom SportNgin Jquery
	 */
	SNjquery.init();

	// $scope.$watch(function(){
	// 	return $rootScope.activeTemplate;
	// }, function() {
	// 	$scope.activeTemplate = $rootScope.activeTemplate;
	// }, true);

	/**
	 * nextStep function
	 * 
	 * instead of sending having the state change from a ui-sref on the next step
	 * elements, i just set it in here with one function that checks the current state,
	 * and passes the chosen template as a param.
	 */
	$scope.nextStep = function(){
		var current = $state.current.name;

		if (current == 'templateSelect') {
			$state.go('tournamentInfo', {template: $scope.activeTemplate}, true);
		} else if ( current == 'tournamentInfo') {
			$state.go('tournamentDescription', {template: $scope.activeTemplate}, true);
		} else if ( current == 'tournamentDescription') {
			$state.go('tournamentContact', {template: $scope.activeTemplate}, true);
		} else if ( current == 'info') {
			$state.go('templateSelect', {template: $scope.activeTemplate}, true);
		}
	};

	/**
	 * Template selection function
	 * 
	 * Doesnt return anything. All it does is check for the 
	 * current template variable and set the active template to the appropriate
	 * one based on the user selection. As of right now this doesnt really work.
	 * @return {none}
	 */
	$scope.activeButton = function() {
		changeTemplate.prepForBroadcast();
	}

	/**
	 * generatePdf function
	 *
	 * calls the convert method from the injected html to pdf service.
	 * it pretty much just sends the user data collected fromt the form
	 * and sends it to be processed and downloaded by the actual PDF templates
	 * @return {php stdClass object} the return doesnt matter as the data is only being used one way
	 */
	$scope.generatePdf = function() {
		return html2pdf.convert($scope.Model);
	}

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


