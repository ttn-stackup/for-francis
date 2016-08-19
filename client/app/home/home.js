angular.module()

    .config(function ($stateProvider) {
        $stateProvider.state("home", {
            url: "/",
            templateUrl: "app/home/home.html",
            controller:"homeCtrl as ctrl"
        })
    });
