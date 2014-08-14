(function(angular) {
    "use strict";

    angular.module("Swagwise")
        .controller("SwagController", function($scope, SwagService) {

            $scope.SwagSearch = "";

            SwagService.swag().then(function(response) {

                $scope.swag = response.data;
            });
        });

})(window.angular);