import angular from 'angular';

// component
import quantityComponent from './component/quantity/quantity.component';
import addCartComponent from './component/addCart/addCart.component';
import cartIconComponent from './component/cartIcon/cartIcon.component';

// service
import ProductService from './service/product.service';

// filter
import arrayJoinFilter from './filter/arrayJoin.filter';

export default angular.module('storefront.shared', [])
  .component('quantityComponent', quantityComponent)
  .component('cartIconComponent', cartIconComponent)
  .component('addCartComponent', addCartComponent)
  .service('ProductService', ProductService)
  .filter('arrayJoinFilter', arrayJoinFilter)
  .name;