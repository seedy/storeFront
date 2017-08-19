require('./productTile.component.scss');


class ProductTileController {
  constructor() {

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