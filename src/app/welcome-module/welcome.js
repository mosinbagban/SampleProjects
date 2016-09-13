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
        this.disclaimerText = '';
        this.genesysChatServiceAPI = '';

        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.sendTranscript = false;
        this.helpMessage = '';
        this.question = '';

        this.data = {
            firstName: '',
            lastName: '',
            email: '',
            sendTranscript: false,
            helpMessage: '',
            question: '',
        };
    }

    // bind() {
    //     debugger;
    //     this.data = {
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         sendTranscript: false,
    //         helpMessage: '',
    //         question: '',
    //     };
    //
    //     this.childViewModel = '../chat-module/chat';
    // }

    created(owningView, view) {

        this.disclaimerText = this.appConfig.disclaimerText;

        this.genesysChatServiceAPI = this.appConfig.genesysChatServiceAPI;

        this.appConfig.helpOptions.forEach(function(option){
            this.helpOptions.push({value:option.value, label:option.label})
        }.bind(this));

    }

    startchat(){
        this.data.firstName = this.firstName;
        this.data.lastName = this.lastName;
        this.data.email = this.email;
        this.data.sendTranscript = this.sendTranscript;
        this.data.helpMessage = this.helpMessage;
        this.data.question = this.question;

        this.router.navigateWithParams("chat", this.data);
    }
}
