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