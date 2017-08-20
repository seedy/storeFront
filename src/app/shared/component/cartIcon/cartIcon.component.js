require('./cartIcon.component.scss');

import CartDialogController from '../../dialog/cartDialog/cartDialog.controller';

class CartIconController {
  constructor($rootScope, $mdDialog, $state) {
    this.rootScope = $rootScope;
    this.dialogCtrl = CartDialogController;
    this.$mdDialog = $mdDialog;
    this.state = $state;
    this.events = [];
  }

  $onInit(){
    if(!this.store){
      this.store = {};
      this.count = 0;
    }
    this.watchQuantityEvents();
  }

  $onChanges(changes){
    let storeChanges = changes.store;
    if(storeChanges && storeChanges.currentValue !== undefined){
      this.count = this.countFromStore();
    }
  }

  $doCheck(){
    this.count = this.countFromStore();
  }

  $onDestroy(){
    this.events.forEach((deregister) => deregister());
  }

  watchQuantityEvents(){
    let self = this;

    this.events.push(this.rootScope.$on('quantity.add', function(event, args){
      self.storeElem(args.id, args.amount);
    }));
    this.events.push(this.rootScope.$on('addcart.add', function(event, args){
      self.storeElem(args.id, args.amount);
    }));
    this.events.push(this.rootScope.$on('quantity.remove', function(event, args){
      self.removeElem(args.id, args.amount);
    }));
  }

  storeElem(id, amount){
    if(this.store[id]){
      this.store[id] += amount;
    } else {
      this.store[id] = amount;
    }
    this.count = this.countFromStore();
  }

  removeElem(id, amount){
    if(this.store[id]){
      if(this.store[id] > amount){
        this.store[id] -= amount;
      } else {
        delete this.store[id];
      }
    }
    this.count = this.countFromStore();
  }

  countFromStore(){
    return Object.keys(this.store).reduce((aggr, key) => {
      aggr+= this.store[key];
      return aggr;
    }, 0);
  }

  openCartDialog(event){
    let self = this;
    this.$mdDialog.show({
      controller: this.dialogCtrl,
      controllerAs: '$ctrl',
      locals: {store: this.store},
      bindToController: true,
      template: require('../../dialog/cartDialog/cartDialog.html'),
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true
    })
      .then(function(response){
        return self.state.go('home.cart');
      }, function(){
      });
  }
}

const cartIconComponent = {
  controller: CartIconController,
  bindings: {store: '='},
  template: require('./cartIcon.component.html')
};

export default cartIconComponent;