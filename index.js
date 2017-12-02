'use strict';
const electron = require('electron');

const app = electron.app;

// Adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// Prevent window being garbage collected
let mainWindow;

const onClosed = () => {
	// Dereference the window
	// for multiple windows store them in an array
    mainWindow = null;
};

const createMainWindow = () => {
    const win = new electron.BrowserWindow({
        width     : 600,
        height    : 400,
        maxHeight : 700,
        maxWidth  : 800,
        minHeight : 400,
        minWidth  : 500
    });

    win.loadURL(`file://${__dirname}/index.html`);
    win.on('closed', onClosed);

    return win;
};

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (!mainWindow) {
        mainWindow = createMainWindow();
    }
});

app.on('ready', () => {
    mainWindow = createMainWindow();
});
