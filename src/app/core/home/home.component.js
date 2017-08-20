require('./home.component.scss');

import logoUrl from 'media/logo.png';

// Home component is expected to be a singleton :
// if you had two instances in the same time, rootScope event handling would be a mess
class HomeController {
  constructor($rootScope) {
    this.rootScope = $rootScope;
    this.logoUrl = logoUrl;
    this.store = {};
    this.events = [];
  }

  $onInit(){
    this.watchQuantityEvents();
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
  }

  removeElem(id, amount){
    if(this.store[id]){
      if(this.store[id] > amount){
        this.store[id] -= amount;
      } else {
        delete this.store[id];
      }
    }
  }

}
const homeComponent = {
  controller: HomeController,
  template: require('./home.component.html')
};

export default homeComponent;
