require('./category.component.scss');

import headerUrl from 'media/plates-header.jpg';
import products from 'json/products.json';

class CategoryController {
  constructor() {
    this.headerUrl = headerUrl;
    this.products = products.map((product) => {
      return angular.extend(product, {
        src: require('media/' + product.image)
      });
    });
  }
}

const categoryComponent = {
  bindings: {
    title: '<'
  },
  controller: CategoryController,
  template: require('./category.component.html')
};

export default categoryComponent;