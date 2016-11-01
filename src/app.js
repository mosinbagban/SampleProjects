
import {inject, BindingEngine} from 'aurelia-framework';
import {Router} from 'aurelia-router';
//import AppRouterConfig from './router-config';

@inject(Router, BindingEngine)
export class App {

  constructor(router, bindingEngine){
    this.bindingEngine = bindingEngine;
    this.router = router;
  }

  activate() {
    //this.appRouterConfig.configure();
  }

  configureRouter(config, router) {

    config.title = 'Chat Application';

    //config.options.pushState = true;

    // Here, we describe the routes we want along with information about them
    // such as which they are accessible at, which module they use, and whether
    // they should be placed in the navigation bar
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './app/welcome-module/welcome'}
    ]);

    this.router = router;
  }

  // Generic routing
  navigateToPage(page, params) {

    let routerParams = this.router.routes.find(x => x.name === page);
    routerParams.data = params;

    this.router.navigate(page);
  }

}
