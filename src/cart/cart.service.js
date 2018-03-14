angular.module('angularkart.cart')
    .service('CartService', [function(){

        var cartItems = [];
        this.addToCart = function(item){
            cartItems.push(item);
        };

        this.getAllCartItems = function(){
            return cartItems;
        };

    }]);