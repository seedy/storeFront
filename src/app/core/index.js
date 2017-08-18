import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './core.routes';

import HomeController from './home/home.controller';

export default angular.module('storefront.core', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;