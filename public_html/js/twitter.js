/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("Twitter", ['ngResource'])
function TwitterCtrl($scope,$resource){
    $scope.twitter = $resource('http://search.twitter.com');
    $scope.twitter.get();
}

