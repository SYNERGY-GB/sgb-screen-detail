'use strict';

angular.module('sgb-screen-detail', ['megazord'])
    .controller('sgb-screen-detail-controller', ['_router', '$stateParams', '_screen', '_screenParams', '$scope', 
                function (_router, $stateParams, _screen, _screenParams, $scope) {

        _screen.initialize($scope, _screenParams);
        $scope.data = $stateParams.data;

/**************************************************/

        $scope.goBack = function(event) {
            _router.fireEvent(
                {
                 name: event, 
                 params: {}
                }
            );  
        }

        $scope.extraParams = {
            goBack: $scope.goBack
        }



    }]); 