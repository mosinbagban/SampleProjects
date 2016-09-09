/**
 * Created by n689716 on 9/7/16.
 */

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import AppRouterConfig from './router-config';

@inject(Router, AppRouterConfig)
export class Chat {

  constructor(router, appRouterConfig){
    this.router = router;
    this.appRouterConfig = appRouterConfig;
  };

  activate() {
    this.appRouterConfig.configure();
  };
}
