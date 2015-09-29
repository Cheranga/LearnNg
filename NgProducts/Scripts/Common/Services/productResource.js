(function () {

    "use strict";

    //
    // We're using ngResource to call our back-end services. For this our custom service
    // needs to be registered as a factory.
    //
    angular.module("common.services")
        .factory("productResource", ["$resource", productResource]);

    function productResource($resource) {
        //
        // Return a product by a specific id
        //
        return $resource("/api/products/:productId");
    }


}());