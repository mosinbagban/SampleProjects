/**
 * Created by n689716 on 9/7/16.
 */
import { inject, BindingEngine } from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {validation} from 'voya-validation';
import AppConfig from '../../config/chat-config';
import {App} from '../../app';

@inject(Router, BindingEngine, AppConfig, App)
export class Welcome {

    constructor(router, bindingEngine, appConfig, app){
        this.router = router;
        this.bindingEngine = bindingEngine;
        this.appConfig = appConfig;
        this.validation = validation;
        this.app = app;

        this.helpOptions = [];
        this.disclaimerText = '';
        this.genesysChatServiceAPI = '';

        this.busy = false;

        this.data = {
            firstName: '',
            lastName: '',
            email: '',
            sendTranscript: false,
            helpMessage: '',
            question: '',
        };

        this.validationErrors = {};
    }

    created(owningView, view) {
        this.disclaimerText = this.appConfig.disclaimerText;

        this.genesysChatServiceAPI = this.appConfig.genesysChatServiceAPI;

        this.appConfig.helpOptions.forEach(function(option){
            this.helpOptions.push({value:option.value, label:option.label})
        }.bind(this));
    }

    startchat() {
        this.validationErrors = {};
        this.busy = true;

        // Do Validation
        this.validate(this.data);

        //Fail for Errors
        if(this.validationErrors.firstName || this.validationErrors.lastName || this.validationErrors.email) {
            this.busy = false;
            return;
        }

        this.app.navigateToPage("chat", this.data);
    }

    validate(fields) {
        this.validationErrors =  validation(this.data)
            .property('firstName', 'First Name')
            .isNotEmpty()
            .property('lastName', 'Last Name')
            .isNotEmpty()
            .property('email', 'Email')
            .isEmail()
            .getErrors();
    }

}
