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