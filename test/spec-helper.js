import path from 'path';
import fs from 'fs';
import co from 'co';

browser.addCommand('setStubs', co.wrap(setStubs));
browser.addCommand('setPreset', co.wrap(setPreset));
browser.addCommand('preset', co.wrap(setPreset));
browser.addCommand('resetStubs', co.wrap(resetStubs));

function* setStubs(config) {
    for (var path in config) {
        if (config.hasOwnProperty(path)) {
            yield browser.url(`/setRoute?route=${path}&stub=${config[path]}`);
        }
    }
}

function* setPreset(name) {
    yield resetStubs();
    yield browser.url(`/services/setPreset?name=${name}.json`);
}

function* resetStubs() {
    yield browser.url('/services/reset');
}
