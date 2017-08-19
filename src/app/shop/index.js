import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './shop.routes';

import cartComponent from './cart/cart.component';

export default angular.module('storefront.shop', [uirouter])
  .config(routing)
  .component('cartComponent', cartComponent)
  .name;