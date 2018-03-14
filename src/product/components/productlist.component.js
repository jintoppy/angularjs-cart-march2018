angular.module('angularkart.product')
    .component('productList', {
        templateUrl: 'src/product/components/productlist.component.html',
        bindings: {
            products: '<'
        }
    });