import angular from 'angular';
import uirouter from 'angular-ui-router';

// routing
import routing from './app.routing';

// modules
import core from './core'

angular.module('storefront', [uirouter, core])
  .config(routing);