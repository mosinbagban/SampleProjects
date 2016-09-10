/**
 * Created by n689716 on 9/7/16.
 */

import {inject, BindingEngine} from 'aurelia-framework';
//import {Router} from 'aurelia-router';
//import AppRouterConfig from './router-config';

@inject(BindingEngine)
export class App {

  constructor(bindingEngine){
    this.bindingEngine = bindingEngine;
    //this.appRouterConfig = appRouterConfig;
  };

  activate() {
    //this.appRouterConfig.configure();
  };

  configureRouter(config, router) {
    //debugger;
    this.router = router;

    config.title = 'Chat Application';

    // Here, we describe the routes we want along with information about them
    // such as which they are accessible at, which module they use, and whether
    // they should be placed in the navigation bar
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './app/welcome-module/welcome'},
      { route: 'chat', name: 'chat', moduleId: './app/chat-module/chat'}
    ]);


  }
}