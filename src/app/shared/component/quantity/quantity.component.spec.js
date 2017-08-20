describe("quantity.component.js", function(){

  beforeEach(angular.mock.module("storefront.shared"));
  beforeEach(inject(function($componentController){
    this.rootScope = { $on: jasmine.createSpy('$on'), $emit: jasmine.createSpy('$emit')};
    this.componentController = $componentController;
    this.bindings = {id: 0, confirm: false, amount: 0};
    this.ctrl = this.componentController('quantityComponent', {$rootScope: this.rootScope}, this.bindings);
  }));

  it("checks bindings", function(){
    this.bindings = {id: 0, confirm: false, amount: 0};
    this.ctrl = this.componentController('quantityComponent', {$rootScope: this.rootScope}, this.bindings);

    expect(this.ctrl.id).toEqual(this.bindings.id);
    expect(this.ctrl.confirm).toEqual(this.bindings.confirm);
    expect(this.ctrl.amount).toEqual(this.bindings.amount);
    expect(this.ctrl.rootScope).toEqual(this.rootScope);
  });

  it("checks lifecycle $onInit", function(){
    this.ctrl.$onInit();

    expect(this.ctrl.rootScope.$on).toHaveBeenCalledWith('addcart.add', jasmine.any(Function));
  });

  it("checks add function with confirm false", function(){
    this.ctrl.confirm = false;
    this.ctrl.add();

    expect(this.ctrl.rootScope.$emit).toHaveBeenCalledWith('quantity.add', {id: this.bindings.id, amount: 1});
    expect(this.ctrl.amount).toEqual(this.bindings.amount+1);
  });

  it("checks add function with confirm true", function(){
    this.ctrl.confirm = true;
    this.ctrl.add()

    expect(this.ctrl.rootScope.$emit).not.toHaveBeenCalled();
    expect(this.ctrl.amount).toEqual(this.bindings.amount+1);
  });

  it("checks remove function with amount = 0", function(){
    this.ctrl.amount = 0;
    this.ctrl.remove();

    expect(this.ctrl.rootScope.$emit).not.toHaveBeenCalled();
    expect(this.ctrl.amount).toEqual(0);
  });

  it("checks remove function with confirm false", function(){
    this.ctrl.amount = 1;
    this.ctrl.confirm = false;
    this.ctrl.remove();

    expect(this.ctrl.rootScope.$emit).toHaveBeenCalledWith('quantity.remove', {id: this.bindings.id, amount: 1});
    expect(this.ctrl.amount).toEqual(0);
  });

  it("checks remove function with confirm true", function(){
    this.ctrl.amount = 1;
    this.ctrl.confirm = true;
    this.ctrl.remove()

    expect(this.ctrl.rootScope.$emit).not.toHaveBeenCalled();
    expect(this.ctrl.amount).toEqual(0);
  });
});
