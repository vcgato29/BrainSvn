import remote from 'remote';
var Menu = remote.require('menu');
var template = require('./menu');

Menu.setApplicationMenu(Menu.buildFromTemplate(template()));
