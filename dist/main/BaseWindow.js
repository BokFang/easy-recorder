"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = require("path");
class BaseWindow extends electron_1.BrowserWindow {
    name;
    constructor(options) {
        const defaultOptions = {
            name: options.name,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                backgroundThrottling: false,
                preload: (0, path_1.join)(__dirname, 'preload.js'),
            },
        };
        super(Object.assign({}, defaultOptions, options));
        this.name = options.name;
        if (process.env.NODE_ENV === 'development') {
            this.webContents.openDevTools();
            this.loadURL('http://localhost:3000');
        }
        else {
            this.loadFile((0, path_1.join)(__dirname, '../renderer/index.html'));
        }
    }
}
exports.default = BaseWindow;
