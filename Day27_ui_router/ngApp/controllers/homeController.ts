namespace MyApp.Controllers {

    export class HomeController {
        public message;

        constructor($state:angular.ui.IStateService) {
            this.message = "Message from the HomeController!";
            $state.transitionTo("home.news");
        }
    }

    export class HomeNewsController {
        public message;

        constructor() {
            this.message = "Message from the HomeNewsController!";
        }
    }

    export class HomeWeatherController {
        public message;

        constructor() {
            this.message = "Message from the HomeWeatherController!";
        }
    }


}