(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-detail', ['megazord'])
    .controller('sgb-screen-detail-controller', ['_router', '_data', '_screen', '_screenParams', '$scope','$ionicHistory',
                function (_router, _data, _screen, _screenParams, $scope, $ionicHistory) {

        _screen.initialize($scope, _screenParams);
        $scope.data = _data;
        $scope.params = _screenParams;
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

},{}]},{},[1]);
