/**
 * Created by n689716 on 9/7/16.
 */
import { inject, BindingEngine } from 'aurelia-framework';
import {Router} from 'aurelia-router';
import AppConfig from '../../config/chat-config';

@inject(Router, BindingEngine, AppConfig)
export class Welcome {

    constructor(router, bindingEngine, appConfig){
        this.router = router;
        this.bindingEngine = bindingEngine;
        this.appConfig = appConfig;

        this.helpOptions = [];
    }

    created(owningView, view) {

        this.disclaimerText = this.appConfig.disclaimerText;

        this.appConfig.helpOptions.forEach(function(option){
            this.helpOptions.push({value:option.value, label:option.label})
        }.bind(this));

    }

    startchat(){
        //alert(`Hi`);
        this.router.navigate("chat");
    }

}