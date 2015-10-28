'use strict';

angular.module('sgb-screen-detail', ['megazord'])
    .controller('sgb-screen-detail-controller', ['_router', '_data', '_screen', '_screenParams', '$scope','$ionicHistory',
                function (_router, _data, _screen, _screenParams, $scope, $ionicHistory) {

        _screen.initialize($scope, _screenParams);
        $scope.data = _data;

/**************************************************/

        $scope.goBack = function() {
            $ionicHistory.goBack(); 
        }

        $scope.goHome = function() {
            $ionicHistory.nextViewOptions({
                historyRoot: true
            })
            _router.fireEvent({
                name: 'goHome',
                params: {}
            })
        }

        $scope.extraParams = {
            goBack: $scope.goBack
        }


    }]); 