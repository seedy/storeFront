require('./productTile.component.scss');


class ProductTileController {
  constructor($state) {
    this.active = false;
    this._$state = $state;
  }

  $onInit(){

  }

  toggleOverlay(){
    this.active = !this.active;
  }

  showDetails(){
    return this._$state.go('home.detail', {id: this.product.id});
  }

}

const productTileComponent = {
  bindings: {
    product: '<'
  },
  controller: ProductTileController,
  template: require('./productTile.component.html')
};

export default productTileComponent;