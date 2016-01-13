'use strict';

var AppModel = require('./models/app-model'),
    AppView = require('./views/app-view');


$(function() {
    var appModel = new AppModel();
    showApp();

    function showApp() {
        new AppView({ model: appModel }).render();
    }
});
