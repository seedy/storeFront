export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      component: 'homeComponent',
      abstract: true
    })
    .state('home.category', {
      url: '/category/{type}',
      resolve: {
        title: function($transition$) {
          return $transition$.params().type;
        }
      },
      component: 'categoryComponent'
    })
    .state('home.category.detail', {
      url: '/:id',
      component: 'detailComponent'
    })
  ;
}