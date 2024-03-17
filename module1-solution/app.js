(function() {
    angular.module('Module1Solution', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.checkDishes = function() {
            $scope.result = 'none';
            if(!$scope.dishes) {
                return;
            }
            const dishes = $scope.dishes.split(',').filter((word) => word !== '');
            if(dishes.length <= 3) {
                $scope.result = 'ok';
            } else {
                $scope.result = 'overflow'
            }
        }
    }
})();