describe('SportNgin Home Controller', function() {
	
	beforeEach(module('sportNgin'));

	var $controller;

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

	describe('$scope.Model', function() {
		var $scope, controller;

		beforeEach(inject(function (_$controller_) {
			$scope = {};
			controller = $controller('homeCntrl', { $scope: $scope});
		}));

		it("should set itself to itself or to the default object i have defined", function() {
			expect($scope.Model).toEqual({
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
									 	twebsiteName		: ""
										});
		});

	});

	// describe('$scope.Model', function() {
	// 	var $scope, controller;

	// 	beforeEach(inject(function (_$controller_) {
	// 		$scope = {};
	// 		controller = $controller('homeCntrl', { $scope: $scope});
	// 	}));

	// 	it("should set itself to itself or to the default object i have defined", function() {
		
	// 	});

	// });

});