import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './core.routes';

import HomeController from './home/home.controller';
import CategoryController from './category/category.controller';
import DetailController from './detail/detail.controller';

export default angular.module('storefront.core', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .controller('CategoryController', CategoryController)
  .controller('DetailController', DetailController)
  .name;