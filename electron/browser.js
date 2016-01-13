var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var path = require('path');
var Menu = require('menu');
var template = require('./menu');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

htmlPath = path.join(__dirname, 'index.html');

process.argv.forEach(function(arg) {
    if (arg.lastIndexOf('--htmlpath=', 0) === 0) {
        htmlPath = path.resolve(arg.replace('--htmlpath=', ''), 'index.html');
    }
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1500, height: 1000});

    Menu.setApplicationMenu(Menu.buildFromTemplate(template()));

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + htmlPath);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
