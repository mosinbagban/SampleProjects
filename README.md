# Sample App

##Getting Started

 * If you haven't setup your dev environment yet for use with Git, NodeJS, Bower, JSPM, etc, then first follow these instructions [https://github.com/Voya-Financial/Documentation/blob/master/getting-started-with-fe-dev.md](https://github.com/Voya-Financial/Documentation/blob/master/getting-started-with-fe-dev.md)

 * Next, open a terminal to the project root folder and run the following commands
   * `npm install`
   * `bower install`
   * `jspm install`

 * Next, manually create the 'my-voya/static/myvoya/js' folder

 * Next, you can run the following gulp commands
   - `gulp` (opens the app in 'dev' mode and watches for updates to the source code)
   - `gulp build:dist` (builds a distribution ready build of the app to the /dist folder)
   - `gulp test` (runs tests against the dist version.  run `gulp build:dist` before running this command)
   - `grunt serve:dist` (starts the local express webserver and point it at the /dist folder.

 * When the app is running, point your browser to...
   - http://localhost:9200/index.html to view 

 * During Development DEBUG mode is on by default.  After a build, DEBUG mode can be turned on by adding DEBUG=1 to the query string in the URL.

* 1/23/15 - checked in voya-builder and voya-stub-server into voya_node_modules folder due to issues devs and Jenkins were having connecting to github enterprise / github.com respectively using npm.  Once this project is moved to github enterprise this should be resolved and they can be removed from the repo

The following deps can be removed after moving to github enterprise
    "fs": "0.0.2",
    "path": "^0.11.14",
    "rsvp": "^3.1.0"
    "babel-runtime": "^5.8.25",
    "bootstrap": "^3.3.5",
    "extend": "^3.0.0",
    "http-proxy-middleware": "^0.9.0",
    "jquery": "^2.1.4",
    "mkdirp": "^0.5.1",
    "ncp": "^2.0.0"
