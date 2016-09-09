/**
 * Created by n689716 on 9/7/16.
 */

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Chat {

    constructor(router){
        this.router = router;

        this.heading = 'Welcome to the Chat App!';
        this.info = 'Please configure the chat API URL in chat-config.js file';
    };

}
