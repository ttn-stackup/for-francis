angular.module("dow")
    .config(function ($stateProvider) {
        $stateProvider
            .state("dashboard", {
                url:"/dashboard",
                templateUrl: "/app/dashboard/dashboard.html",
                controller: "DashboardCtrl as ctrl"
            })
    });