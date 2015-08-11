'use strict';

angular.module('sgb-screen-detail', ['megazord'])
    .controller('sgb-screen-detail-controller', ['$stateParams', '_screen', '_screenParams', '$scope', function ($stateParams, _screen, _screenParams, $scope) {

        _screen.initialize($scope, _screenParams);
        $scope.data = $stateParams.data;
        $scope.templateType = _screenParams.templateType; 

        //Delete after mz framework gets updated
        $scope.screenType = "sgb-screen-detail";

    }]); 