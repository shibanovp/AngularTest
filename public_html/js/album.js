/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function AlbumCtrl($scope){
    //alert("d");
    $scope.images =[
        {image: 'img/project1@2x.png', thumbnail: 'img/project1.png',description:'Image 01 decription'},
        {image: 'img/project2@2x.png', thumbnail: 'img/project2.png',description:'Image 02 decription'},
        {image: 'img/project3@2x.png', thumbnail: 'img/project3.png',description:'Image 03 decription'},
        {image: 'img/project4@2x.png', thumbnail: 'img/project4.png',description:'Image 04 decription'},
        {image: 'img/project5@2x.png', thumbnail: 'img/project5.png',description:'Image 05 decription'}
    ];
    $scope.currentImage =_.first($scope.images);
    $scope.setCurrentImage = function(image){
        $scope.currentImage = image;
    }
}