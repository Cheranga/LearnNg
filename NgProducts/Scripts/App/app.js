(function() {
    "use strict";

    //
    //  Defining the main module.
    //  1.  Add "common.services" module as a dependency
    //
    var app = new angular.module('productManagement',
        ["common.services",
            "productResourceMock",
            "ui.router"
        ]);

    //
    // Set the routes
    //
    app.config([
        "$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            //
            // Home route
            //
            $stateProvider.state("home",
            {
                url: "/",
                templateUrl: "/Views/welcomeView.html" //This path is case sensitive
                
            });
            //
            // Product list route
            //
            $stateProvider.state("productList",
            {
                url: "/products",
                templateUrl: "/Views/Products/productListView.html", //This path is case sensitive
                controller:"ProductListController as vm"
            });
            //
            // Edit product route
            //
            $stateProvider.state("productEdit",
            {
                url: "/products/edit/:productId",
                templateUrl: "/Views/Products/productEditView.html", //This path is case sensitive
                controller: "ProductEditController as vm"
            });
        }
    ]);
}());