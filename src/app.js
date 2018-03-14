var myapp = angular.module('angularkart', [
    'ui.router',
    'ui.bootstrap',
    'angularkart.cart',
    'angularkart.product'
]);

myapp.config(['$stateProvider', function($stateProvider){
    $stateProvider.state({
        name: 'home',
        url: '/',
        component: 'productList'
    });

    $stateProvider.state({
        name: 'productDetails',
        url: '/product/{productId}',
        component: 'productDetail'
    });


}]);