(function () {
    'use strict';

    angular.module('bookBrowserApp', [])
        .service('bookService', function ($http) {
            return {
                getImages: function () {
                    return $http.get("/data/books.json", { responseType: 'json' });
                }
            }
        })
        .controller('bookListCtrl', function ($scope, bookService) {
            $scope.txtTitle = 'Book List';
            bookService.getImages().success(function (result) {
                $scope.bookImages = result;
            });           
        });
})();