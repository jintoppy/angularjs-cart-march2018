angular.module('angularkart.product')
    .controller('ProductDetailComponentCtrl', ['CartService', function(CartService){

        this.addToCart = function(item){
            CartService.addToCart(item);
        };

    }])
    .component('productDetail', {
        templateUrl: 'src/product/components/productdetail.component.html',
        bindings: {
            product: '<'
        },
        controller: 'ProductDetailComponentCtrl'
    });