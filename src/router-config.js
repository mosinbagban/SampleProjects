import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

// Using Aurelia's dependency injection, we inject Router
// with the @inject decorator
@inject(Router)
export default class {

    constructor(router) {
        this.router = router;
    };

    configure() {

        var appRouterConfig = function(config) {

            config.title = 'Chat Application';

            // Here, we describe the routes we want along with information about them
            // such as which they are accessible at, which module they use, and whether
            // they should be placed in the navigation bar
            config.map([
                { route: ['','welcome'], name: 'welcome', moduleId: './app/welcome-module/welcome'},
                { route: 'chat', name: 'chat', moduleId: './app/chat-module/chat'}
            ]);
        };

        // The router is configured with what we specify in the appRouterConfig
        this.router.configure(appRouterConfig);

    };
}