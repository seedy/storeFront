export default function routes($stateProvider) {
  $stateProvider
    .state('home.cart', {
      url: '/cart',
      template: require('./cart/cart.html'),
      controller: 'CartController',
      controllerAs: 'cart'
    })
  ;
}