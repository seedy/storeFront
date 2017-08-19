require('./home.component.scss');

import logoUrl from 'media/logo.png';


class HomeController {
  constructor() {
    this.logoUrl = logoUrl;
  }

}
const homeComponent = {
  controller: HomeController,
  template: require('./home.component.html')
};

export default homeComponent;
