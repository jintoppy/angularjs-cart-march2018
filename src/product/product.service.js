angular.module('angularkart.product')
    .service('ProductService',['$http', function($http){

        this.getProducts = function(){
            return $http
                        .get('db/products.json')
                        .then(function(res){
                            return res.data;
                        });

        };

        
    }]);