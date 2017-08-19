require('./cartIcon.component.scss');

import CartDialogController from '../../../core/cartDialog/cartDialog.controller';

class CartIconController {
  constructor($rootScope, $mdDialog) {
    this.rootScope = $rootScope;
    this.count = 0;
    this.dialogCtrl = CartDialogController;
    this.$mdDialog = $mdDialog;
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

  openCartDialog(event){
    this.$mdDialog.show({
      controller: this.dialogCtrl,
      template: require('../../../core/cartDialog/cartDialog.html'),
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true
    })
      .then(function(){

      })
  }
}

const cartIconComponent = {
  controller: CartIconController,
  template: require('./cartIcon.component.html')
};

export default cartIconComponent;