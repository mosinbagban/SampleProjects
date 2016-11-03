import { gaHelper } from 'google-analytics-helper';

export function initAnalytics(){

    gaHelper.init({
        config : gaConfig,
        defaultEvent : 'defaultEvent',
        eventAttribute : 'data-ga-event',
        logEvents : window.DEBUG ? true : false,
        fetchDimensions : true,
        includeAccountDimensions : false
    });
 }   

function sendPageView(obj){
    
    gaHelper.pageView({ 
      'page': obj.title,
      'title': 'voya chat'
    });
}

const gaConfig = {
    "events" : {
        "ChatWindow_Pre_Login_Start_Chat" : {
            "eventCategory" : "Contact_Us_Pre_Login",
            "eventAction" : "Click",
            "event" : "GAEvent",
            "eventLabel":"start_chat_pre",
            "eventType" : "click",
            "eventValue": "" 
        },
        "ChatWindow_Post_Login_Start_Chat" : {
            "eventCategory" : "Contact_Us_Post_Login",
            "eventAction" : "Click",
            "event" : "GAEvent",
            "eventLabel":"start_chat_post",
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

export { gaConfig , preSubjectDetails , postSubjectDetails }