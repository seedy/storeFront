require('./cartDIalog.scss');

import logoUrl from 'media/logo.png';
import products from 'json/products.json';

export default class CartDialogController {
  constructor($mdDialog, store, ProductService){
    this.dialog = $mdDialog;
    this.logoUrl = logoUrl;
    this.store = store;
    this.allProducts = products
    .map((json, index) => {
      return ProductService.extendJson(json, index+1);
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
    return this.allProducts
    .filter((product) => this.store[product.id] !== undefined)
    .map((product) => angular.extend(product, {amount: this.store[product.id]}))
    ;
  }

  getTotal(){
    return this.products.reduce((aggr, prod) => {
      aggr+= prod.price * prod.amount;
      return aggr;
    }, 0);
  }

  goToCart(){
    // need to pass data?
    return this.dialog.hide({store: this.store, total: this.total});
  }
}