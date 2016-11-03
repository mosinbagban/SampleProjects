import { gaHelper } from 'google-analytics-helper';

/* For GA */

export function sendPageView(obj){
    
    gaHelper.pageView({ 
      'page': obj.pageRoute,
      'title': obj.title
    });
}

export function pushEvent(obj){
    
    gaHelper.pushEvent(obj);
}

const gaConfig = {
    "events" : {
        "ChatWindow_Pre_Login_Start_Chat" : {
            "eventCategory" : "Contact_Us_Pre_Login",
            "eventAction" : "Click",
            "event" : "GAEvent",
            "eventLabel":"start_chat",
            "eventType" : "click",
            "eventValue": "" 
        },
        "ChatWindow_Post_Login_Start_Chat" : {
            "eventCategory" : "Contact_Us_Post_Login",
            "eventAction" : "Click",
            "event" : "GAEvent",
            "eventLabel":"start_chat",
            "eventType" : "click",
            "eventValue": "" 
        }
    }
}


const preSubjectDetails = {
    "eventLabel" : "", //dynamic
    "eventCategory" : "Contact_Us_Pre_Login",
    "eventAction" : "Select",
    "eventType" : "click",
    "event" : "GAEvent" ,
    "eventValue": ""    
}

const postSubjectDetails = {
    "eventLabel" : "", //dynamic
    "eventCategory" : "Contact_Us_Post_Login",
    "eventAction" : "Select",
    "eventType" : "click",
    "event" : "GAEvent",
    "eventValue": ""     
}

const pageView = {
    "preLogin" :  "/einfo/contactus_prelogin_chat_window",
    "preTitle" :  "Voya Chat - Pre Login",
    "postLogin" : "/einfo/contactus_chat_window",
    "postTitle" : "Voya Chat - Post Login"

}    

export { gaConfig , preSubjectDetails , postSubjectDetails , pageView}