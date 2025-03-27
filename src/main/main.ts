import { app, BrowserWindow } from 'electron';
import BaseWindow from './BaseWindow';

function createWindow() {
    const mainWindow = new BaseWindow({
        name: 'main',
        title: 'Easy Recorder',
        width: 1200,
        height: 800
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});