require('./detail.component.scss');

import products from 'json/products.json';

class DetailController {

  constructor(ProductService) {
    this.product = null;
    this.breadcrumb = [];
    this.products = products.map((product, index) => {
      return ProductService.extendJson(product, index+1);
    });
  }

  $onInit() {
    this.product = this.products.find((product) => product.id === this.id);
    this.setBreadcrumb();
  }

  setBreadcrumb(){
    this.breadcrumb.push('HOME');
    this.breadcrumb.push( (this.product.type + 's').toUpperCase() );
  }
}

const detailComponent = {
  bindings: {
    id: '<'
  },
  controller: DetailController,
  template: require('./detail.component.html')
};

export default detailComponent;