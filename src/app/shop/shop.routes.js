export default function routes($stateProvider) {
  $stateProvider
    .state('home.cart', {
      url: '/cart',
      component: 'cartComponent'
    })
  ;
}