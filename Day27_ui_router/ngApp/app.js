var MyApp;
(function (MyApp) {
    angular.module("MyApp", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // HTML 5 mode on
        $locationProvider.html5Mode(true);
        // State router
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'ngApp/views/home.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('home.news', {
            url: 'home/news',
            templateUrl: 'ngApp/views/home-news.html',
            controller: MyApp.Controllers.HomeNewsController,
            controllerAs: 'vm'
        })
            .state('home.weather', {
            url: 'home/weather',
            templateUrl: 'ngApp/views/home-weather.html',
            controller: MyApp.Controllers.HomeWeatherController,
            controllerAs: 'vm'
        })
            .state('about', {
            abstract: true,
            url: '/about',
            templateUrl: 'ngApp/views/about.html',
            controller: MyApp.Controllers.AboutController,
            controllerAs: 'vm'
        })
            .state('about.views', {
            views: {
                'aboutMe': {
                    templateUrl: 'ngApp/views/about-aboutme.html',
                    controller: MyApp.Controllers.AboutAboutMeController,
                    controllerAs: 'vm'
                },
                'contactMe': {
                    templateUrl: 'ngApp/views/about-contactme.html',
                    controller: MyApp.Controllers.AboutContactMeController,
                    controllerAs: 'vm'
                }
            }
        });
        // Set default route
        $urlRouterProvider.otherwise('home');
    });
})(MyApp || (MyApp = {}));
