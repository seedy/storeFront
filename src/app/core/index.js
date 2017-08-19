import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './core.routes';

import homeComponent from './home/home.component';
import categoryComponent from './category/category.component';
import detailComponent from './detail/detail.component';
import productTileComponent from './productTile/productTile.component';

export default angular.module('storefront.core', [uirouter])
  .config(routing)
  .component('homeComponent', homeComponent)
  .component('categoryComponent', categoryComponent)
  .component('detailComponent', detailComponent)
  .component('productTileComponent', productTileComponent)
  .name;