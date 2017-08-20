import ProductService from './product.service';
describe("product.service.js", function(){

  beforeEach(angular.mock.module('storefront.shared'));
  beforeEach(function(){
    this.productService = new ProductService();
  });

  it("test listProdInStore on empty products", function(){
    let emptyProducts = [];
    let store = {1: 2};
    expect(this.productService.listProdInStore(emptyProducts, store)).toEqual([]);
  });

  it("test listProdInStore on expected values", function(){
    let products = [
      {
        id: 1
      },
      {
        id: 4
      },
      {
        id: 5
      }
    ];
    let store = {1: 2, 5: 1};
    let expected = [
      {
        id: 1,
        amount: 2
      },
      {
        id: 5,
        amount: 1
      }
    ];
    expect(this.productService.listProdInStore(products, store)).toEqual(expected);
  });

  it("test sumProductPrice on empty list", function(){
    let empty = [];
    expect(this.productService.sumProductPrices(empty)).toEqual(0);
  });
  it("test sumProductPrice on expected values", function(){
    let list = [
      {
        price: 1,
        amount: 1
      },
      {
        price: 3,
        amount: 2
      }
    ];
    let expected = 1 + 3 * 2;
    expect(this.productService.sumProductPrices(list)).toEqual(expected);
  });
});