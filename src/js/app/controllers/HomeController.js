(function(){
	
	angular.module('app.module')
		.controller('HomeController', controller);
		
	controller.$inject = ['CONSTANTS'];
	
	function controller(CONSTANTS){
		
		var vm = this;
        vm.application = 'Angular Boilerplate';
        vm.version  = CONSTANTS.VERSION;

	};
	
}());