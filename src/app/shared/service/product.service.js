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

  listProdInStore(products, store){
    return products
      .filter((product) => store[product.id] !== undefined)
      .map((product) => angular.extend(product, {amount: store[product.id]}))
      ;
  }

  sumProductPrices(products){
    return products.reduce((aggr, prod) => {
      aggr+= prod.price * prod.amount;
      return aggr;
    }, 0);
  }
}

export default ProductService;