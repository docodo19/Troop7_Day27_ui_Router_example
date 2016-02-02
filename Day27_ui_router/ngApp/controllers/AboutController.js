var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var AboutController = (function () {
            function AboutController() {
                this.message = "Message from the AboutController!";
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
        var AboutAboutMeController = (function () {
            function AboutAboutMeController() {
                this.message = "Message from the AboutAboutMeController!";
            }
            return AboutAboutMeController;
        })();
        Controllers.AboutAboutMeController = AboutAboutMeController;
        var AboutContactMeController = (function () {
            function AboutContactMeController() {
                this.message = "Message from the AboutContactMeController!";
            }
            return AboutContactMeController;
        })();
        Controllers.AboutContactMeController = AboutContactMeController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
