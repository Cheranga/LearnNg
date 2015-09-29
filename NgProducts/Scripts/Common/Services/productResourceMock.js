(function () {
    "use strict";

    var app = angular.module("productResourceMock", ["ngMockE2E"]);

    app.run(function ($httpBackend) {

        var products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2013",
                "description": "Curved claw steel hammer",
                "cost": 1.00,
                "price": 8.99,
                "category": "toolbox",
                "tags": ["tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }
        ];

        var productUrl = "/api/products";
        //
        // Mock GET all products
        //
        $httpBackend.whenGET(productUrl).respond(products);
        //
        // Mock GET a specific product
        //
        var specificProductUrlPattern = new RegExp(productUrl + "/[0-9][0-9]*", '');

        $httpBackend.whenGET(specificProductUrlPattern).respond(function (method, url, data) {
            var product = {
                productId: 0
            };

            debugger;
            var urlSegments = url.split("/");
            var idSegment = urlSegments[urlSegments.length - 1];

            if (idSegment && idSegment > 0) {
                var productCount = products.length;
                for (var index = 0; index < productCount; index++) {
                    if (products[index].productId == idSegment) {
                        product = products[index];
                        break;
                    }
                }
            }

            return [200, product, {}];


        });
        //
        // Mock a POST
        //
        $httpBackend.whenPOST(productUrl, function(method, url, data) {
            var product = angular.fromJson(data);

            if (product) {
                //
                // Edit / Add scenarios
                //
                if (product.productId) {
                    var prodId = product.productId;
                    var productCount = products.length;
                    for (var index = 0; index < productCount; index++) {
                        if (products[index].productId == prodId) {
                            products[index] = product;
                            break;
                        }
                    }
                } else {
                    products.push(product);
                }
            }
        });

        //
        // Pass through any requests made from files which are in the "App" folder.
        //
        $httpBackend.whenGET(/app/).passThrough();
    });

}());