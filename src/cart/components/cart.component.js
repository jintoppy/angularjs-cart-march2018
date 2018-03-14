angular.module('angularkart.cart')
    .component('cart', {
        templateUrl: 'src/cart/components/cart.component.html',
        bindings: {
            cartItems: '<'
        }
    });