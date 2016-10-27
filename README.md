# Chat UI

Voya Chat UI leveraging Genesys Widget.

##Getting Started

 * If you haven't setup your dev environment yet for use with Git, NodeJS, JSPM, etc, then first follow these instructions [https://github.com/Voya-Financial/Documentation/blob/master/getting-started-with-fe-dev.md](https://github.com/Voya-Financial/Documentation/blob/master/getting-started-with-fe-dev.md)

 * Next, open a terminal to the project root folder and run the following commands
   * `npm install`
   * `jspm install`

 * Next, manually create the 'my-voya/static/myvoya/js' folder

 * Next, you can run the following gulp commands
   - `gulp` (opens the app in 'dev' mode and watches for updates to the source code)
   - `gulp build:dist` (builds a distribution ready build of the app to the /dist folder)
   - `gulp serve:dist` (starts the local express webserver and point it at the /dist folder.

 * When the app is running, point your browser to...
   - http://localhost:9200/index.html to view 

 * During Development DEBUG mode is on by default.  After a build, DEBUG mode can be turned on by adding DEBUG=1 to the query string in the URL.



