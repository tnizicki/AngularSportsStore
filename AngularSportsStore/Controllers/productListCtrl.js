angular.module("sportsStore")
    .constant("categoryActiveClass", "btn-primary")
    .constant("pageSize", 3)
    .controller("productListCtrl", function ($scope, $filter, categoryActiveClass, pageSize) {
        var selectedCategory = null;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory;
        }

        $scope.getCategoryActiveClass = function (category) {
            if (category == selectedCategory) {
                return categoryActiveClass;
            } else {
                return "";
            }
        }

        $scope.pageSize = pageSize;
        $scope.selectedPage = 1;

        $scope.getPageClass = function (page) {
            if (page == $scope.selectedPage) {
                return categoryActiveClass;
            } else {
                return "";
            }
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }
    });