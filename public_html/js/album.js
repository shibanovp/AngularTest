/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function AlbumCtrl($scope,$http){
    //alert("d");
    $scope.url = 'images.json';
        $scope.images = [];
        $scope.currentImage ={};
        $scope.imageCategories = [];
    
    
    $scope.handleImagesLoaded  = function(data, status){
        $scope.images = data;
        $scope.currentImage =_.first($scope.images);
        $scope.imageCategories = _.uniq(_.pluck($scope.images, 'category'));
    }
    $scope.fetch = function(){
        $http.get($scope.url).success($scope.handleImagesLoaded);
    }
    $scope.setCurrentImage = function(image){
        $scope.currentImage = image;
    }
    $scope.fetch();
}