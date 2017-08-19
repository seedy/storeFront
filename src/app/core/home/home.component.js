require('./home.scss');

import logoUrl from 'media/logo.png';
import headerUrl from 'media/plates-header.jpg';

export default class HomeController {
  constructor() {
    this.logoUrl = logoUrl;
    this.headerUrl = headerUrl;
  }
}