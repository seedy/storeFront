export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home/home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('home.category', {
      url: '/category/:type',
      template: require('./category/category.html'),
      controller: 'CategoryController',
      controllerAs: 'category'
    })
    .state('home.category.detail', {
      url: '/:id',
      template: require('./detail/detail.html'),
      controller: 'DetailController',
      controllerAs: 'detail'
    })
  ;
}