import { inject, BindingEngine } from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {validation} from 'voya-validation';
import AppConfig from '../../config/chat-config';
import { gaConfig, sendPageView , preSubjectDetails, postSubjectDetails, pushEvent, pageView } from '../../config/chat-ga-config';
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

        this.busy = false;

        this.data = {
            firstName: pwebContext.FIRST_NAME,
            lastName: pwebContext.LAST_NAME,
            email: pwebContext.EMAIL,
            sendTranscript: false,
            helpMessage: '',
            question: ''

        };

        this.validationErrors = {};
        
        /* For GA start */
        
        if( pwebContext.AuthenticationLevel == this.appConfig.postLoginAuthenticationLevel ){
            sendPageView({ pageRoute: pageView.postLogin , title: pageView.postTitle });
        } else {
            sendPageView({ pageRoute: pageView.preLogin , title: pageView.preTitle });
        } 
           
        /* For GA end */

    }

    created(owningView, view) {
        this.disclaimerText = this.appConfig.disclaimerText;

        let options = pwebContext.AuthenticationLevel == this.appConfig.postLoginAuthenticationLevel ? this.appConfig.helpOptions : this.appConfig.helpOptionsPre;

        options.forEach(function(option){
            this.helpOptions.push({value:option.value, label:option.label})
        }.bind(this));
    }

    startchat() {
        this.validationErrors = {};
        this.busy = true;

        // Do Validation
        this.validate();

        //check if required field is not entered, fail for Errors
        if(this.validationErrors.firstName || this.validationErrors.lastName) {
            this.busy = false;
            return;
        }
        
        // validate email if email is filled or if send transcript is selected, fail for Errors
        if( this.data.email.length > 0 || this.data.sendTranscript == true) {
            
            // Do Email Validation
            this.validateEmail();

            if( this.validationErrors.email ){
                this.busy = false;
                return;
            }
        }


       this.newStartChat(window._genesys.cxwidget.bus);
       
       /* For GA start */
       if( pwebContext.AuthenticationLevel == this.appConfig.postLoginAuthenticationLevel ){
            postSubjectDetails.eventLabel = 'ChatWindow_Post_Login_ChatSubject_'+this.data.helpMessage;
            pushEvent(postSubjectDetails);
            pushEvent(gaConfig.events.ChatWindow_Post_Login_Start_Chat);
       } else {
            preSubjectDetails.eventLabel = 'ChatWindow_Pre_Login_ChatSubject_'+this.data.helpMessage;
            pushEvent(preSubjectDetails);
            pushEvent(gaConfig.events.ChatWindow_Pre_Login_Start_Chat);
       }
       /* For GA end */

       this.busy = false; 

       //this.app.navigateToPage("chat", this.data);
    }

    validate() {
        this.validationErrors =  validation(this.data)
            .property('firstName', 'First Name')
            .isNotEmpty()
            .property('lastName', 'Last Name')
            .isNotEmpty()
            .getErrors();
    }

    validateEmail(){
        this.validationErrors =  validation(this.data)
            .property('email', 'Email')
            .isNotEmpty()
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

        pwebContext.SEND_TRANSCRIPT = sendTranscript;
        pwebContext.INTERACTION_REASON = helpMessage;
        pwebContext.INTERACTION_QUESTION = question;
        pwebContext.FIRST_NAME = firstName;
        pwebContext.LAST_NAME = lastName;
        pwebContext.EMAIL = email;

        bus.command("cx.plugin.WebChat.open", {form:false})
            .done(function(e){

                bus.command("cx.plugin.WebChatService.startChat", {
                    userData: pwebContext,
                    nickname: firstName,
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    subject: helpMessage,
                    text: question

                })
                    .done(function(e){
                        $("#start_chat").prop( "disabled", true );
                        $('.cx-widget.cx-webchat').find("textarea.input").removeClass("disabled").attr("disabled", false);

                        if( question.length > 0 ){
                            bus.command("cx.plugin.WebChatService.sendMessage", {
                                message: question,
                                messageType: "text"
                            }).done(function(e) {
                            }).fail(function(e) {})
                        }

                    })
                    .fail(function(e){});
            })
            .fail(function(e){});



        bus.subscribe("cx.plugin.WebChat.ready", function(){
           // alert('chat is ready');
        });

        bus.subscribe("cx.plugin.WebChat.closed", function(){
            //alert('chat is closed');
            //window.open('','_parent','');
            window.close();
        });

        bus.subscribe("cx.plugin.WebChat.minimized", function(){
            //alert('chat is minimized');
        });

        bus.subscribe("cx.plugin.WebChat.unminimized", function(){
            //alert('chat is unminimized');
        });
    }

}
