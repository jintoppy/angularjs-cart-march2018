var myapp = angular.module('angularkart', [
    'ui.router',
    'ui.bootstrap',
    'angularkart.cart',
    'angularkart.product'
]);

myapp.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
        name: 'home',
        url: '/',
        component: 'productList',
        resolve: {
            products: ['ProductService', function(ProductService){
                return ProductService.getProducts()
            }]
        }
    });

    $stateProvider.state({
        name: 'cart',
        url: '/cart',
        component: 'cart',
        resolve: {
            cartItems: ['CartService', function(CartService){
                return CartService.getAllCartItems();
            }]
        }
    });

    $stateProvider.state({
        name: 'productDetails',
        url: '/product/{productId}',
        component: 'productDetail',
        resolve: {
            product: ['$transition$', 'ProductService', 
                function($transition$, ProductService){
                    var prodId = $transition$.params().productId;
                    return ProductService.getProductById(prodId);
                }]
        }
    });

    $urlRouterProvider.otherwise('/');

}]);