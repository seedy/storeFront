require('./category.component.scss');

import headerUrl from 'media/plates-header.jpg';
import products from 'json/products.json';

class CategoryController {

  constructor(ProductService) {
    this.headerUrl = headerUrl;
    this.products = products.map((product, index) => {
      return ProductService.extendJson(product, index+1);
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