'use strict';

angular.module('sgb-screen-detail', ['megazord'])
    .controller('sgb-screen-detail-controller', ['$stateParams', '$scope', function($stateParams, $scope){
        $scope.item = $stateParams.data;
    }]);