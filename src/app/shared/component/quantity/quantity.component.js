require('./quantity.component.scss');

class QuantityController {
  constructor($rootScope) {
    this.rootScope = $rootScope;
  }

  $onInit(){
    let self = this;
    this.rootScope.$on('addcart.add', function(event, args){
      if(self.confirm && args.id === self.id){
        self.amount = 0;
      }
    });

  }

  add(){
    if(!this.confirm){
      this.rootScope.$emit('quantity.add',{id:this.id, amount:1});
    }
    this.amount++;
  }

  remove(){
    if(this.amount > 0){
      if(!this.confirm){
        this.rootScope.$emit('quantity.remove',{id:this.id, amount:1});
      }
      this.amount--;
    }
  }

}

const quantityComponent = {
  bindings: {
    id: '<',
    confirm: '<',
    amount: '='
  },
  controller: QuantityController,
  template: require('./quantity.component.html')
};

export default quantityComponent;