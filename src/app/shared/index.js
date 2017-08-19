import angular from 'angular';



// service
import ProductService from './service/product.service';

// filter
import arrayJoinFilter from './filter/arrayJoin.filter';

export default angular.module('storefront.shared', [])
  .service('ProductService', ProductService)
  .filter('arrayJoinFilter', arrayJoinFilter)
  .name;