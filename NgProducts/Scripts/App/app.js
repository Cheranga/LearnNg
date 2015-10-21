(function () {
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
                controller: "ProductListController as vm"
            })
            .state("productEdit",
            {
                //
                // Edit product route
                //
                abstract:true,
                url: "/products/edit/:productId",
                templateUrl: "/Views/Products/productEditView.html", //This path is case sensitive
                controller: "ProductEditController as vm",
                resolve: {
                    productResource: 'productResource',
                    //
                    // $stateParams is a property in stateProvider, which gives information about the parameter information
                    //
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            })
            .state("productEdit.info",
            {
                //
                // Edit product route
                //
                url: "/info",
                templateUrl: "/Views/Products/productEditInfoView.html", //This path is case sensitive
            })
            .state("productEdit.price",
            {
                //
                // Edit product route
                //
                url: "/price",
                templateUrl: "/Views/Products/productEditPriceView.html", //This path is case sensitive
            })
            .state("productEdit.tags",
            {
                //
                // Edit product route
                //
                url: "/tags",
                templateUrl: "/Views/Products/productEditTagsView.html", //This path is case sensitive
            })
            .state("productDetail",
            {
                //
                // Edit product route
                //
                url: "/products/:productId",
                templateUrl: "/Views/Products/productDetailView.html", //This path is case sensitive
                controller: "ProductDetailController as vm",
                resolve: {
                    productResource: 'productResource',
                    //
                    // $stateParams is a property in stateProvider, which gives information about the parameter information
                    //
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            });
        }
    ]);
}());