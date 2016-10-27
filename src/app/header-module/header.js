import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Header {

    constructor(router){
        this.heading = 'Welcome';
        this.info = 'Voya Chat App';
    };

}