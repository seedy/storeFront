class ProductService {
  constructor(){

  }

  extendJson(product, id) {
    return angular.extend(product, {
      id,
      type: 'plate',
      src: require('media/' + product.image)
    });
  }
}

export default ProductService;