require('./addCart.component.scss');

class AddCartController {
  constructor($rootScope) {
    this.rootScope = $rootScope;
  }

  emit() {
    if (this.amount > 0) {
      this.rootScope.$emit('addcart.add', {id: this.id, amount: this.amount});
    }
  }
}

const addCartComponent = {
  bindings: {
    id: '<',
    amount: '='
  },
  controller: AddCartController,
  template: require('./addCart.component.html')
};

export default addCartComponent;