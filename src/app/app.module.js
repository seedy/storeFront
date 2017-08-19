// external modules
import angular from 'angular';
import uirouter from 'angular-ui-router';
import material from 'angular-material';

// css
import 'angular-material/angular-material.css';

// material theme
import theme from './app.material-theme';



// modules
import core from './core';
import shared from './shared';
import shop from './shop';

// routing
import routing from './app.routing';

const storeFront = angular.module('storefront', [uirouter, material, core, shared, shop])
  .config(routing)
  .config(theme);

export default storeFront;