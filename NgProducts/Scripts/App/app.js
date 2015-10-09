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

            //
            // $urlRouterProvider depends on the URL to activate the state. So remember to specify the URL, NOT the actual applciation state
            //
            $urlRouterProvider.otherwise("/");
            
            $stateProvider.state("home",
            {
                //
                // Home route
                //
                url: "/",
                templateUrl: "/Views/welcomeView.html" //This path is case sensitive
                
            })
            .state("productList",
            {
                //
                // Product list route
                //
                url: "/products",
                templateUrl: "/Views/Products/productListView.html", //This path is case sensitive
                controller:"ProductListController as vm"
            })
            .state("productEdit",
            {
                //
                // Edit product route
                //
                url: "/products/edit/:productId",
                templateUrl: "/Views/Products/productEditView.html", //This path is case sensitive
                controller: "ProductEditController as vm"
            });
        }
    ]);
}());