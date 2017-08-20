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
    .state('home.detail', {
      url: '/detail/{id:int}',
      component: 'detailComponent',
      resolve: {
        id: function($transition$) {
          return $transition$.params().id;
        }
      }
    })
  ;
}