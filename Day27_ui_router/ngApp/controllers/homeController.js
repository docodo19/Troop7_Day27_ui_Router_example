var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($state) {
                this.message = "Message from the HomeController!";
                $state.transitionTo("home.news");
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var HomeNewsController = (function () {
            function HomeNewsController() {
                this.message = "Message from the HomeNewsController!";
            }
            return HomeNewsController;
        })();
        Controllers.HomeNewsController = HomeNewsController;
        var HomeWeatherController = (function () {
            function HomeWeatherController() {
                this.message = "Message from the HomeWeatherController!";
            }
            return HomeWeatherController;
        })();
        Controllers.HomeWeatherController = HomeWeatherController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
