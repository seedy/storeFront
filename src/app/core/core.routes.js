export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home/home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}