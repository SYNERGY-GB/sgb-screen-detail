'use strict';

angular.module('sgb-screen-detail', ['megazord'])
    .controller('sgb-screen-detail-controller', ['_router', '$stateParams', '_screen', '_screenParams', '$scope','$ionicHistory',
                function (_router, $stateParams, _screen, _screenParams, $scope, $ionicHistory) {

        _screen.initialize($scope, _screenParams);
        $scope.data = $stateParams.data;

/**************************************************/

        $scope.goBack = function(screens) {
            $ionicHistory.goBack(screens); 
        }

        $scope.extraParams = {
            goBack: $scope.goBack
        }



    }]); 