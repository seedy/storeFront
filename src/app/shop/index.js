import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './shop.routes';

import CartController from './cart/cart.controller';

export default angular.module('storefront.shop', [uirouter])
  .config(routing)
  .controller('CartController', CartController)
  .name;