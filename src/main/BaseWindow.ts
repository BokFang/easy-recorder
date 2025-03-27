import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { join } from 'path';

export interface BaseWindowOptions extends BrowserWindowConstructorOptions {
    name: string;
}

class BaseWindow extends BrowserWindow {
    name: string;

    constructor(options: BaseWindowOptions) {
        const defaultOptions: BaseWindowOptions = {
            name: options.name,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                backgroundThrottling: false,
                preload: join(__dirname, 'preload.js'),
            },
        };

        super(Object.assign({}, defaultOptions, options));
        this.name = options.name;
        if (process.env.NODE_ENV === 'development') {
            this.webContents.openDevTools();
            this.loadURL('http://localhost:3000');
        } else {
            this.loadFile(join(__dirname, '../renderer/index.html'));
        }
    }
}

export default BaseWindow;