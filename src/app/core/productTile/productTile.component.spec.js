describe("productTile.component.js", function(){

  beforeEach(angular.mock.module("storefront.core"));
  beforeEach(inject(function($componentController){
    this.state = { go: jasmine.createSpy('go')};
    this.componentController = $componentController;
    this.bindings = {product: {}};
    this.ctrl = this.componentController('productTileComponent', {$state: this.state}, this.bindings);
  }));

  it("checks bindings", function(){
    this.bindings = {product: {id: 5544}};
    this.ctrl = this.componentController('productTileComponent', {$state: this.state}, this.bindings);

    expect(this.ctrl.active).toEqual(false);
    expect(this.ctrl.product).toEqual(this.bindings.product);
    expect(this.ctrl._$state).toEqual(this.state);
  });

  it("checks toggleOverlay function", function(){
    this.ctrl.toggleOverlay();
    expect(this.ctrl.active).toEqual(true);

    this.ctrl.toggleOverlay();
    expect(this.ctrl.active).toEqual(false);
  });

  it("checks showDetails function", function(){
    let productId = 51;
    this.ctrl.product.id = productId;

    this.ctrl.showDetails();

    expect(this.ctrl._$state.go).toHaveBeenCalledWith('home.detail', {id: productId});
  });

});
