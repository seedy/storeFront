require('./category.component.scss');

import headerUrl from 'media/plates-header.jpg';

class CategoryController {
  constructor() {
    this.headerUrl = headerUrl;
  }

}

const categoryComponent = {
  bindings: {
    title: '<'
  },
  controller: CategoryController,
  template: require('./category.component.html')
};

export default categoryComponent;