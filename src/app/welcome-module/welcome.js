/**
 * Created by n689716 on 9/7/16.
 */
import { inject, BindingEngine } from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {validation} from 'voya-validation';
import AppConfig from '../../config/chat-config';
import {App} from '../../app';

@inject(Router, BindingEngine, AppConfig, App, EventAggregator)
export class Welcome {

    constructor(router, bindingEngine, appConfig, app, eventAggregator){
        this.router = router;
        this.bindingEngine = bindingEngine;
        this.eventAggregator = eventAggregator;
        this.appConfig = appConfig;
        this.validation = validation;
        this.app = app;

        this.helpOptions = [];
        this.disclaimerText = '';

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

        var options = pwebContext.AuthenticationLevel == 2 ? this.appConfig.helpOptions : this.appConfig.helpOptionsPre;

        options.forEach(function(option){
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

        this.newStartChat(window._genesys.cxwidget.bus);

        //this.app.navigateToPage("chat", this.data);
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


    newStartChat(bus) {

        let firstName = this.data.firstName;
        let lastName = this.data.lastName;
        let email = this.data.email;
        let sendTranscript = this.data.sendTranscript;
        let helpMessage = this.data.helpMessage;
        let question = this.data.question;

        bus.command("cx.plugin.WebChat.open", {form:false})
            .done(function(e){

                console.log('****************************');
                bus.command("cx.plugin.WebChatService.startChat", {
                    userData: pwebContext,
                    nickname: firstName,
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    subject: question

                })
                    .done(function(e){
                        $('.cx-widget.cx-webchat').find("textarea.input").removeClass("disabled").attr("disabled", false);
                    })
                    .fail(function(e){});
            })
            .fail(function(e){});



        bus.subscribe("cx.plugin.WebChat.ready", function(allData){
            alert('chat is ready');
        });

        bus.subscribe("cx.plugin.WebChat.closed", function(){
            //alert('chat is closed');
            //window.open('','_parent','');
            window.close();
        });

        bus.subscribe("cx.plugin.WebChat.minimized", function(){
            alert('chat is minimized');
        });

        bus.subscribe("cx.plugin.WebChat.unminimized", function(){
            alert('chat is unminimized');
        });
    }

}
