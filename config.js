System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 2,
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "voya-github:*": "jspm_packages/voya-github/*"
  },

  map: {
    "app": "src/app",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-cookie": "npm:aurelia-cookie@1.0.9",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-beta.3.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.1",
    "aurelia-history": "npm:aurelia-history@1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
    "aurelia-pal": "npm:aurelia-pal@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-path": "npm:aurelia-path@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "backbone": "npm:backbone@1.1.2",
    "backbone.babysitter": "npm:backbone.babysitter@0.1.6",
    "backbone.epoxy": "npm:backbone.epoxy@1.3.4",
    "backbone.marionette": "github:marionettejs/backbone.marionette@2.4.1",
    "backbone.radio": "npm:backbone.radio@0.9.0",
    "backbone.wreqr": "npm:backbone.wreqr@1.3.1",
    "branding": "voya-github:Voya/deep-ui-branding@1.0.0",
    "c3": "npm:c3@0.4.11",
    "clean-css": "npm:clean-css@3.4.19",
    "common": "src/common",
    "core-js": "npm:core-js@1.2.7",
    "debounce": "npm:debounce@1.0.0",
    "dom-delegate": "npm:dom-delegate@2.0.3",
    "es6-collections": "npm:es6-collections@0.5.6",
    "extend": "npm:extend@2.0.1",
    "font-awesome": "npm:font-awesome@4.6.3",
    "foundation": "npm:zurb-foundation-5@5.4.7",
    "google-analytics-helper": "voya-github:Voya/deep-ui-google-analytics-helper@2.6.0",
    "jquery": "npm:jquery@2.2.4",
    "perfget": "npm:perfget@0.2.1",
    "polymer/mutationobservers": "github:polymer/mutationobservers@0.4.2",
    "query-string": "npm:query-string@3.0.0",
    "slick-carousel": "npm:slick-carousel@1.6.0",
    "systemjs/plugin-css": "github:systemjs/plugin-css@0.1.26",
    "text": "github:systemjs/plugin-text@0.0.7",
    "underscore": "npm:underscore@1.8.3",
    "util": "github:jspm/nodelibs-util@0.1.0",
    "voya-aurelia": "voya-github:Voya/deep-ui-voya-aurelia@1.6.0",
    "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
    "voya-browser-support-notification": "voya-github:Voya/deep-ui-voya-browser-support-notification@3.0.0",
    "voya-button": "voya-github:Voya/deep-ui-voya-button@5.1.0",
    "voya-card": "voya-github:Voya/deep-ui-voya-card@1.0.2",
    "voya-charts": "voya-github:Voya/deep-ui-voya-charts@master",
    "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3",
    "voya-dollar-graph": "voya-github:Voya/deep-ui-voya-dollar-graph@2.7.0-beta-branch",
    "voya-expand-collapse": "voya-github:Voya/deep-ui-voya-expand-collapse@develop",
    "voya-field": "voya-github:Voya/deep-ui-voya-field@2.x.x",
    "voya-footer": "voya-github:Voya/deep-ui-voya-footer@2.5.1",
    "voya-header": "voya-github:Voya/deep-ui-voya-header@develop",
    "voya-indicator": "voya-github:Voya/deep-ui-voya-indicator@2.0.0",
    "voya-main-nav": "voya-github:Voya/deep-ui-voya-main-nav@develop",
    "voya-mobile-nav": "voya-github:Voya/deep-ui-voya-mobile-nav@develop",
    "voya-modal": "voya-github:Voya/deep-ui-voya-modal@1.0.0-beta5",
    "voya-notification": "voya-github:Voya/deep-ui-voya-notification@3.0.0-beta4",
    "voya-orange-money": "github:Voya-Financial/voya-orange-money@develop",
    "voya-slider": "voya-github:Voya/deep-ui-voya-slider@1.5.0",
    "voya-table": "voya-github:Voya/deep-ui-voya-table@master",
    "voya-tabs": "voya-github:Voya/deep-ui-voya-tabs@2.3.7",
    "voya-tooltip": "voya-github:Voya/deep-ui-voya-tooltip@2.6.2",
    "voya-top-nav": "voya-github:Voya/deep-ui-voya-top-nav@develop",
    "voya-validation": "voya-github:Voya/deep-ui-voya-validation@1.5.0",
    "whatwg-fetch": "npm:whatwg-fetch@0.11.1",
    "github:Voya-Financial/voya-orange-money@develop": {
      "assert": "npm:assert@1.4.1",
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
      "aurelia-dialog": "npm:aurelia-dialog@1.0.0-beta.3.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
      "debounce": "npm:debounce@1.0.0",
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "extend": "npm:extend@2.0.1",
      "fetch": "github:github/fetch@0.11.1",
      "format-date": "voya-github:Voya/deep-ui-format-date@1.1.0",
      "google-analytics-helper": "voya-github:Voya/deep-ui-google-analytics-helper@2.6.0",
      "markdown-it": "npm:markdown-it@4.2.2",
      "moment": "npm:moment@2.14.1",
      "numeral": "npm:numeral@1.5.3",
      "om-js-calc": "voya-github:Voya/deep-ui-om-js-calc@master",
      "user-store": "voya-github:Voya/deep-ui-user-store@1.0.2",
      "voya-aurelia": "voya-github:Voya/deep-ui-voya-aurelia@1.6.0",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-button": "voya-github:Voya/deep-ui-voya-button@5.1.0",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.4.1",
      "voya-dollar-graph": "voya-github:Voya/deep-ui-voya-dollar-graph@2.7.0-beta-branch",
      "voya-expand-collapse": "voya-github:Voya/deep-ui-voya-expand-collapse@develop",
      "voya-field": "voya-github:Voya/deep-ui-voya-field@2.x.x",
      "voya-slider": "voya-github:Voya/deep-ui-voya-slider@2.0.0",
      "voya-tooltip": "voya-github:Voya/deep-ui-voya-tooltip@2.6.2",
      "voya-validation": "voya-github:Voya/deep-ui-voya-validation@1.6.0"
    },
    "github:dbushell/Pikaday@1.4.0": {
      "css": "github:systemjs/plugin-css@0.1.26"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:argparse@1.0.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-binding@1.0.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-dialog@1.0.0-beta.3.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0"
    },
    "npm:aurelia-framework@1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-http-client@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0"
    },
    "npm:aurelia-metadata@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0"
    },
    "npm:aurelia-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0"
    },
    "npm:aurelia-router@1.0.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0"
    },
    "npm:aurelia-task-queue@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.4",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-templating-resources@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-templating@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:backbone.babysitter@0.1.6": {
      "backbone": "npm:backbone@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.6.0"
    },
    "npm:backbone.epoxy@1.3.4": {
      "backbone": "npm:backbone@1.1.2",
      "jquery": "npm:jquery@2.2.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.radio@0.9.0": {
      "backbone": "npm:backbone@1.1.2",
      "underscore": "npm:underscore@1.7.0"
    },
    "npm:backbone.wreqr@1.3.1": {
      "backbone": "npm:backbone@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.6.0"
    },
    "npm:backbone@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:c3@0.4.11": {
      "css": "github:systemjs/plugin-css@0.1.26",
      "d3": "npm:d3@3.5.17"
    },
    "npm:clean-css@3.4.19": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.12"
    },
    "npm:debounce@1.0.0": {
      "date-now": "npm:date-now@1.0.1"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:error@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelize": "npm:camelize@1.0.0",
      "string-template": "npm:string-template@0.2.1",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:es5-ext@0.10.12": {
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.12",
      "es6-symbol": "npm:es6-symbol@3.1.0"
    },
    "npm:es6-symbol@3.1.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.12"
    },
    "npm:ev-store@7.0.0": {
      "individual": "npm:individual@3.0.0"
    },
    "npm:event-emitter@0.3.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.12",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.26"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.26"
    },
    "npm:global@4.3.0": {
      "process": "npm:process@0.5.2"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:linkify-it@1.1.1": {
      "uc.micro": "npm:uc.micro@1.0.2"
    },
    "npm:markdown-it@4.2.2": {
      "argparse": "npm:argparse@1.0.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "entities": "npm:entities@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "linkify-it": "npm:linkify-it@1.1.1",
      "mdurl": "npm:mdurl@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "uc.micro": "npm:uc.micro@1.0.2"
    },
    "npm:next-tick@0.2.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.0": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:slick-carousel@1.6.0": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:virtual-dom@1.3.0": {
      "browser-split": "npm:browser-split@0.0.1",
      "error": "npm:error@4.4.0",
      "ev-store": "npm:ev-store@7.0.0",
      "global": "npm:global@4.3.0",
      "is-object": "npm:is-object@1.0.1",
      "next-tick": "npm:next-tick@0.2.2",
      "x-is-array": "npm:x-is-array@0.1.0",
      "x-is-string": "npm:x-is-string@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:xtend@4.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "voya-github:Voya/deep-ui-apply-hooks@1.2.0": {
      "ev-store": "npm:ev-store@7.0.0",
      "is-primitive": "voya-github:Voya/deep-ui-is-primitive@0.1.0",
      "stylesheet": "voya-github:Voya/deep-ui-stylesheet@2.0.0"
    },
    "voya-github:Voya/deep-ui-branding@1.0.0": {
      "extend": "npm:extend@2.0.1",
      "stylesheet": "voya-github:Voya/deep-ui-stylesheet@2.0.0"
    },
    "voya-github:Voya/deep-ui-format-date@1.1.0": {
      "moment": "github:moment/moment@2.14.1"
    },
    "voya-github:Voya/deep-ui-google-analytics-helper@2.6.0": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "user-store": "voya-github:Voya/deep-ui-user-store@1.0.2"
    },
    "voya-github:Voya/deep-ui-is-number@1.0.1": {
      "is-primitive": "voya-github:Voya/deep-ui-is-primitive@0.1.0"
    },
    "voya-github:Voya/deep-ui-user-store@1.0.2": {
      "extend": "npm:extend@2.0.1"
    },
    "voya-github:Voya/deep-ui-virtual-dom-view@1.0.1": {
      "apply-hooks": "voya-github:Voya/deep-ui-apply-hooks@1.2.0",
      "events": "github:Gozala/events@1.1.1",
      "extend": "npm:extend@2.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "virtual-dom": "npm:virtual-dom@1.3.0"
    },
    "voya-github:Voya/deep-ui-voya-aurelia@1.6.0": {
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.4.1"
    },
    "voya-github:Voya/deep-ui-voya-base-styles@2.4.2": {
      "compass-mixins": "github:Igosuki/compass-mixins@1.0.2",
      "font-awesome": "npm:font-awesome@4.4.0"
    },
    "voya-github:Voya/deep-ui-voya-browser-support-notification@3.0.0": {
      "bowser": "npm:bowser@1.4.1",
      "extend": "npm:extend@2.0.1",
      "voya-notification": "voya-github:Voya/deep-ui-voya-notification@3.0.0"
    },
    "voya-github:Voya/deep-ui-voya-button@5.1.0": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.4.1"
    },
    "voya-github:Voya/deep-ui-voya-card@1.0.2": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "extend": "npm:extend@2.0.1",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-charts@master": {
      "c3": "npm:c3@0.4.11",
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "event-emitter": "npm:event-emitter@0.3.4",
      "private-protected": "npm:private-decorator@0.1.7",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-component-utils@2.3.2": {
      "document-register-element": "github:WebReflection/document-register-element@0.4.5"
    },
    "voya-github:Voya/deep-ui-voya-component-utils@3.3.3": {
      "camelcase": "npm:camelcase@2.1.1",
      "decamelize": "npm:decamelize@1.2.0"
    },
    "voya-github:Voya/deep-ui-voya-component-utils@3.4.1": {
      "camelcase": "npm:camelcase@2.1.1",
      "custom-event-polyfill": "npm:custom-event-polyfill@0.2.2",
      "decamelize": "npm:decamelize@1.2.0",
      "focusin": "npm:focusin@2.0.0"
    },
    "voya-github:Voya/deep-ui-voya-dollar-graph@2.7.0-beta-branch": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "extend": "npm:extend@2.0.1",
      "perfget": "npm:perfget@0.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "virtual-dom-view": "voya-github:Voya/deep-ui-virtual-dom-view@1.0.1",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.4.1",
      "voya-tooltip": "voya-github:Voya/deep-ui-voya-tooltip@2.6.2"
    },
    "voya-github:Voya/deep-ui-voya-expand-collapse@develop": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.4.1"
    },
    "voya-github:Voya/deep-ui-voya-field@2.x.x": {
      "autoNumeric": "github:BobKnothe/autoNumeric@1.9.43",
      "bowser": "npm:bowser@1.4.1",
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "extend": "npm:extend@2.0.1",
      "hideShowPassword": "github:cloudfour/hideShowPassword@2.0.11",
      "jquery.inputmask": "github:RobinHerbots/Inputmask@3.3.1",
      "moment": "npm:moment@2.14.1",
      "pikaday": "github:dbushell/Pikaday@1.4.0",
      "stylesheet": "voya-github:Voya/deep-ui-stylesheet@2.0.0",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.4.1",
      "voya-tooltip": "voya-github:Voya/deep-ui-voya-tooltip@2.6.2"
    },
    "voya-github:Voya/deep-ui-voya-footer@2.5.1": {
      "extend": "npm:extend@2.0.1",
      "systemjs/plugin-json": "github:systemjs/plugin-json@0.1.2",
      "text": "github:systemjs/plugin-text@0.0.2",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-header@develop": {
      "debounce": "npm:debounce@1.0.0",
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3",
      "voya-main-nav": "voya-github:Voya/deep-ui-voya-main-nav@develop",
      "voya-mobile-nav": "voya-github:Voya/deep-ui-voya-mobile-nav@mobile-nav-2",
      "voya-top-nav": "voya-github:Voya/deep-ui-voya-top-nav@develop"
    },
    "voya-github:Voya/deep-ui-voya-indicator@2.0.0": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-main-nav@develop": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-mobile-nav@develop": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-mobile-nav@mobile-nav-2": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "font-awesome": "npm:font-awesome@4.6.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-modal@1.0.0-beta5": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "tabbable": "npm:tabbable@1.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-notification@3.0.0": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-notification@3.0.0-beta4": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3"
    },
    "voya-github:Voya/deep-ui-voya-slider@1.5.0": {
      "custom-event": "npm:custom-event@1.0.0",
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "ev-store": "npm:ev-store@7.0.0",
      "extend": "npm:extend@2.0.1",
      "is-number": "voya-github:Voya/deep-ui-is-number@1.0.1",
      "is-primitive": "voya-github:Voya/deep-ui-is-primitive@0.1.0",
      "stylesheet": "voya-github:Voya/deep-ui-stylesheet@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "virtual-dom-view": "voya-github:Voya/deep-ui-virtual-dom-view@1.0.1",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@2.3.2"
    },
    "voya-github:Voya/deep-ui-voya-slider@2.0.0": {
      "custom-event": "npm:custom-event@1.0.0",
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "ev-store": "npm:ev-store@7.0.0",
      "extend": "npm:extend@2.0.1",
      "is-number": "voya-github:Voya/deep-ui-is-number@1.0.1",
      "is-primitive": "voya-github:Voya/deep-ui-is-primitive@0.1.0",
      "stylesheet": "voya-github:Voya/deep-ui-stylesheet@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "virtual-dom-view": "voya-github:Voya/deep-ui-virtual-dom-view@1.0.1",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.4.1"
    },
    "voya-github:Voya/deep-ui-voya-table@master": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "voya-github:Voya/deep-ui-voya-tabs@2.3.7": {
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3",
      "voya-tooltip": "voya-github:Voya/deep-ui-voya-tooltip@2.6.2"
    },
    "voya-github:Voya/deep-ui-voya-tooltip@2.6.2": {
      "debounce": "npm:debounce@1.0.0",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.4.1"
    },
    "voya-github:Voya/deep-ui-voya-top-nav@develop": {
      "debounce": "npm:debounce@1.0.0",
      "dom-delegate": "npm:dom-delegate@2.0.3",
      "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.4.2",
      "voya-button": "voya-github:Voya/deep-ui-voya-button@5.1.0",
      "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.3.3",
      "voya-main-nav": "voya-github:Voya/deep-ui-voya-main-nav@develop"
    }
  }
});
