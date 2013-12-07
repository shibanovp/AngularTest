/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('components',[])
        .directive('helloWorld', function(){
            return{
                restrict: 'E',
                scope:{
                    name:'bind'
                },
                templateUrl: 'partials/hello.html'
            }
        });
angular.module('HelloApp',['components'])
