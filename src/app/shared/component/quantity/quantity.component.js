require('./quantity.component.scss');

class QuantityController {
  constructor() {

  }

  add(){
    this.amount++;
  }

  remove(){
    this.amount--;
  }
}

const quantityComponent = {
  bindings: { amount: '=' },
  controller: QuantityController,
  template: require('./quantity.component.html')
};

export default quantityComponent;