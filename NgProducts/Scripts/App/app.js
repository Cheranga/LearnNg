(function() {
    "use strict";

    //
    //  Defining the main module.
    //  1.  Add "common.services" module as a dependency
    //
    var app = new angular.module('productManagement', ["common.services", "productResourceMock"]);
}());