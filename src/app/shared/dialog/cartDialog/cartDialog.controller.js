require('./cartDIalog.scss');

import logoUrl from 'media/logo.png';
import products from 'json/products.json';

export default class CartDialogController {
  constructor($mdDialog, store, ProductService){
    this.dialog = $mdDialog;
    this.logoUrl = logoUrl;
    this.store = store;
    this.productService = ProductService;

    this.allProducts = products
    .map((json, index) => {
      return this.productService.extendJson(json, index+1);
    });

    this.products = this.listStore();
    this.total = this.getTotal();
  }

  removeProduct(id){
    if(this.store[id]){
      if(this.store[id] > 1){
        this.store[id]--;
      } else {
        delete this.store[id];
      }
      this.products = this.listStore();
      this.total = this.getTotal();
    }
  }

  listStore(){
    return this.productService.listProdInStore(this.allProducts, this.store);
  }

  getTotal(){
    return this.productService.sumProductPrices(this.products);
  }

  goToCart(){
    return this.dialog.hide();
  }
}