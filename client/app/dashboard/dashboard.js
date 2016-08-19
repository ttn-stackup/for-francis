angular.module()

    .config(function ($stateProvider) {
        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/dashboard/dashboard.html",
            controller:"DashBoardCtrl as ctrl"
        })
    });
