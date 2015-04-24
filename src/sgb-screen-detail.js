'use strict';

angular.module('sgb-screen-detail', ['megazord'])
    .controller('sgb-screen-detail-controller', ['$stateParams','_screenParams', '$scope', function($stateParams, _screenParams, $scope){
        $scope.title = _screenParams.title;
        $scope.item = $stateParams.data;
    }]);