(function () {
    
	angular
		.module('app.module', ['ui.bootstrap', 'ui.router', 'ngResource']);
    
    deferredBootstrapper.bootstrap({
        element: document,
        module: 'app.module',
        resolve: {
            CONSTANTS: ['$http', function ($http) {
                return $http.get('/config.json');
            }]
        }
    });
} ());
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
(function () {

	angular
		.module('app.module')
		.config(config);
		
		config.$inject = ['$stateProvider', '$urlRouterProvider'];
		
		function config($stateProvider, $urlRouterProvider){
			
			//Setup the routes.
			$stateProvider              
				.state('home', {
					url: '/',
                    controller: 'HomeController as vm',
					templateUrl: '/templates/home.html'
				});				
		};

} ());
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
//# sourceMappingURL=maps/main.js.map