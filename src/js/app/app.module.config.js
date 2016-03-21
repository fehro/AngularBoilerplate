(function () {

	angular
		.module('app.module')
		.config(config);
		
		config.$inject = ['$locationProvider', 'CONSTANTS'];
		
		function config($locationProvider, CONSTANTS){
			
 			//Enable html5 mode.
	 		$locationProvider.html5Mode(true);
			
		};

} ());