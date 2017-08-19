require('./cartIcon.component.scss');

class CartIconController {
  constructor($rootScope) {
    this.rootScope = $rootScope;
    this.count = 0;
  }

  $onInit(){
    this.watchQuantityEvents();
  }

  watchQuantityEvents(){
    let self = this;
    this.rootScope.$on('quantity.add', function(event, args){
      self.count+=args.amount;
    });
    this.rootScope.$on('addcart.add', function(event, args){
      self.count+=args.amount;
    });
    this.rootScope.$on('quantity.remove', function(event, args){
      self.count-=args.amount;
    });
  }
}

const cartIconComponent = {
  controller: CartIconController,
  template: require('./cartIcon.component.html')
};

export default cartIconComponent;