angular.module('angularkart.product')
    .service('ProductService',['$http', function($http){

        this.getProducts = function(){
            return $http
                        .get('db/products.json')
                        .then(function(res){
                            return res.data;
                        });

        };

        this.getProductById = function(prodId){
            return this.getProducts()
                    .then(function(products){
                        return products.find(function(p){
                            return p.id == prodId;
                        });
                    });
        };


    }]);