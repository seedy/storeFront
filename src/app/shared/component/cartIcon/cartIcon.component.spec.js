describe("cartIcon.component.js", function(){

  beforeEach(angular.mock.module("storefront.shared"));
  beforeEach(inject(function($componentController){
    this.componentController = $componentController;
    this.bindings = {store: {}};
    this.ctrl = this.componentController('cartIconComponent', {$mdDialog: {}, $state: {}}, this.bindings);
  }));

  it("checks bindings", function(){
    this.bindings = {store: {1:2}};
    this.ctrl = this.componentController('cartIconComponent', {$mdDialog: {}, $state: {}}, this.bindings);

    expect(this.ctrl.store).toEqual(this.bindings.store);
  });

  it("checks lifecycle $onInit", function(){
    let store = 0;
    this.ctrl.store = store;
    expect(this.ctrl.store).toEqual(store);
    expect(this.ctrl.count).toBeUndefined();

    this.ctrl.$onInit();
    expect(this.ctrl.store).toEqual({});
    expect(this.ctrl.count).toEqual(0);

  });

  it("checks lifecycle $doCheck", function(){
    let count = 5;
    spyOn(this.ctrl, 'countFromStore').and.returnValue(count);

    this.ctrl.$doCheck();

    expect(this.ctrl.countFromStore).toHaveBeenCalled();
    expect(this.ctrl.count).toEqual(count);
  });

  it("checks function countFromStore with empty store", function () {
    this.ctrl.store = {};
    expect(this.ctrl.countFromStore()).toEqual(0);
  });

  it("checks function countFromStore with store not empty", function() {
    this.ctrl.store = {1:3,5:1};
    expect(this.ctrl.countFromStore()).toEqual(4);
  });

  it("checks function openCartDialog", inject(function($q){
    this.ctrl.$mdDialog.show = jasmine.createSpy('show').and.returnValue($q.when());

    this.ctrl.openCartDialog();

    expect(this.ctrl.$mdDialog.show).toHaveBeenCalled();
  }));

});
