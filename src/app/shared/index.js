import angular from 'angular';

// component
import quantityComponent from './component/quantity/quantity.component';

// service
import ProductService from './service/product.service';

// filter
import arrayJoinFilter from './filter/arrayJoin.filter';

export default angular.module('storefront.shared', [])
  .component('quantityComponent', quantityComponent)
  .service('ProductService', ProductService)
  .filter('arrayJoinFilter', arrayJoinFilter)
  .name;