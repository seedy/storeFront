require('./cartDIalog.scss');

import logoUrl from 'media/logo.png';

export default class CartDialogController {
  constructor($mdDialog, store){
    this.logoUrl = logoUrl;
    this.store = store;
  }
}