import 'jquery';
import 'voya-component-utils';
import 'voya-tooltip';
import 'voya-tabs';
import 'voya-field';
import 'voya-notification';
import 'voya-indicator';
import 'voya-header';
import 'voya-button';

import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
    /*aurelia.use
        .defaultBindingLanguage()
        .defaultResources()
        .history()
        .router()
        .eventAggregator();*/

    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .defaultResources()
        .history()
        .router()
        .plugin('aurelia-dialog', config => {
            config.useDefaults();
            config.settings.startingZIndex = 1200;
            config.useCSS(' ');
        })
        .plugin('aurelia-animator-css')
        .plugin('aurelia-cookie');
    
    
    aurelia.container.registerInstance('pwebContext', window.pwebContext);

    aurelia.start().then(() => aurelia.setRoot());
}