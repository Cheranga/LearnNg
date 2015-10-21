(function() {
    "use strict";

    angular.module("productManagement")
        .controller('ProductDetailController',
        ["product", productDetailController]);

    //
    // The parameter "product" will be injected by angular, from the resolve property when this route is activated
    //
    function productDetailController(product) {

        var vm = this;

        //vm.product = {
        //    productId: 2,
        //    productName: "Test Product",
        //    productCode: "GDN-0002",
        //    releaseDate: "Oct 21, 2015",
        //    description: "Test product",
        //    cost: 12.34,
        //    price: 19.95,
        //    category: "garden",
        //    tags: ["leaf", "tool"],
        //    imageUrl: "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        //},

        vm.product = product;

        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }


    }

}());