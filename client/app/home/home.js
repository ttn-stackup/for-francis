angular.module("dow")
    .config(function ($stateProvider) {
        $stateProvider
            .state("home", {
                url:"/",
                templateUrl: "/app/home/home.html",
                controller: "HomeCtrl as ctrl"
            })
    });