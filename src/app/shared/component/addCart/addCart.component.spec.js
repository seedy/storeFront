describe("addCart.component.js", function(){

  beforeEach(angular.mock.module("storefront.shared"));
  beforeEach(inject(function($componentController){
    this.componentController = $componentController;
    this.bindings = {id: 0, amount: 0};
    this.ctrl = this.componentController('addCartComponent', null, this.bindings);
  }));

  it("checks bindings", function(){
    this.bindings = {id: 1, amount: 55};
    this.ctrl = this.componentController('addCartComponent', null, this.bindings);

    expect(this.ctrl.id).toEqual(this.bindings.id);
    expect(this.ctrl.amount).toEqual(this.bindings.amount);
  });

  it("checks emit function with amount = 0", inject(function($rootScope){
    spyOn($rootScope, '$emit').and.callThrough();

    this.ctrl.emit();

    expect($rootScope.$emit).not.toHaveBeenCalled();
  }));

  it("checks emit function with amount > 0", inject(function($rootScope){
    this.bindings = {id: 1, amount: 55};
    this.ctrl = this.componentController('addCartComponent', null, this.bindings);
    spyOn($rootScope, '$emit').and.callThrough();

    this.ctrl.emit();

    expect($rootScope.$emit).toHaveBeenCalledWith('addcart.add', {id: this.bindings.id, amount: this.bindings.amount});
  }));

});
