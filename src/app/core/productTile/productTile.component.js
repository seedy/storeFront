require('./productTile.component.scss');


class ProductTileController {
  constructor() {
    this.active = false;
  }

  $onInit(){

  }

  toggleOverlay(){
    this.active = !this.active;
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