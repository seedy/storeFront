require('./cartIcon.component.scss');

import CartDialogController from '../../dialog/cartDialog/cartDialog.controller';

class CartIconController {
  constructor($mdDialog, $state) {
    this.dialogCtrl = CartDialogController;
    this.$mdDialog = $mdDialog;
    this.state = $state;
  }

  $onInit(){
    if(!angular.isObject(this.store)){
      this.store = {};
      this.count = 0;
    }
  }

  $doCheck(){
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