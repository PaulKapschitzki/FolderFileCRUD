const electron = require("electron");
const app = electron.app;
const browserWindow = electron.BrowserWindow;
const url = require("url");
const path = require("path");

let win;

function createWindow() {
    win = new browserWindow();
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('close', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});