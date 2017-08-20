require('./cart.component.scss');

import products from 'json/products.json';

class CartController {
  constructor(ProductService) {
    this.productService = ProductService;

    this.allProducts = products
      .map((json, index) => {
        return this.productService.extendJson(json, index+1);
      });
    this.products = [];
    this.total = 0;
  }

  $onInit(){
    this.initCart(this.homeCtrl.store);
  }

  initCart(store){
    this.products = this.productService.listProdInStore(this.allProducts, store);
    this.total = this.productService.sumProductPrices(this.products);
  }

  removeProduct(id){
    delete this.homeCtrl.store[id];
    this.initCart(this.homeCtrl.store);
  }
}

const cartComponent = {
  controller: CartController,
  require: {
    homeCtrl: '^homeComponent'
  },
  template: require('./cart.component.html')
};

export default cartComponent;