angular.module("sportsStore")
    .constant("productsDataUrl", "http://localhost:2403/products/")
    .controller("sportsStoreCtrl", function ($scope, $http, productsDataUrl) {
        $scope.data = {};

        $http.get(productsDataUrl)
            .success(function(data){
                $scope.data.products = data;
            })
            .error(function(error){
                $scope.data.error = error;
            })
    });