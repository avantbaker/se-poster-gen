describe('Home Controller', function() {

	var homeCntrl,
	scope;

	beforeEach(module('sportNgin'));

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		homeCntrl = $controller('homeCntrl', {
			$scope: scope
		});
	}));

	describe('Hello World', function() {

		it("should say hello world!", function() {
			expect(scope.greeting).toEqual("Hello world!");
		});

	});

});