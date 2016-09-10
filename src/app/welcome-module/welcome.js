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
    }

    created(owningView, view) {

        this.disclaimerText = this.appConfig.disclaimerText;

        this.genesysChatServiceAPI = this.appConfig.genesysChatServiceAPI;

        this.appConfig.helpOptions.forEach(function(option){
            this.helpOptions.push({value:option.value, label:option.label})
        }.bind(this));

    }

    startchat(){
        let firstName = this.firstName;
        let lastName = this.lastName;
        let email = this.email;
        let sendTranscript = this.sendTranscript;
        let helpMessage = this.helpMessage;
        let question = this.question;

        var widgetBus = window._genesys.cxwidget.bus;

        window._genesys.cxwidget.bus.command("cx.plugin.WebChatService.configure", {
            dataURL: this.genesysChatServiceAPI
        }).done(function(e) {
            // success scenario
        }).fail(function(e) {
            // failure scenario: error, exception, improper arguments
            //alert('configure fail');
        })


        widgetBus.subscribe("cx.plugin.WebChat.ready", function(){
            //alert('chat is ready');
        });

        widgetBus.subscribe("cx.plugin.WebChat.closed", function(){
            //alert('chat is closed');
            window.close();
        });

        widgetBus.subscribe("cx.plugin.WebChat.minimized", function(){
           // alert('chat is minimized');
        });

        widgetBus.subscribe("cx.plugin.WebChat.unminimized", function(){
            //alert('chat is unminimized');
        });


        window._genesys.cxwidget.bus.command("cx.plugin.WebChat.open", {form : false}).done(function(e)
        {
            $('.cx-widget.cx-webchat').find("textarea.input").removeClass("disabled").attr("disabled", false);
            var myobject = $('.cx-widget.cx-webchat');

            console.log('****************************'+$.find("textarea"));

            window._genesys.cxwidget.bus.command("cx.plugin.WebChatService.startChat", {
                userData: {"ClientID":"Honeywell-test","sendTranscript":sendTranscript , "vruApp":"vruApp-test" , "AuthenticationLevel":"test-pass" , "DNIS":"dnis-test" , "CUST_ID":"cust-id-test" ,"SSN":"ssn-test" },
                nickname: firstName,
                firstname: firstName,
                lastname: lastName,
                email: email,
                subject: question
            }).done(function(e) {
                //alert('startChat Success');
                // success scenario
            }).fail(function(e) {
                // failure scenario: error, exception, improper arguments
                //alert('startChat Failure');
                return false;
            })// success scenario

        }).fail(function(e)
        {
            // failure scenario: error, exception, improper arguments
        })

        //this.router.navigate("chat");
    }

}