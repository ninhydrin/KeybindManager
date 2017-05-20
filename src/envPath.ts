"use strict";
import * as vscode from 'vscode';

enum OsType {
    Windows,
    Linux,
    Mac
};
export class Environment {
    public PATH = null;
    public OsType = null;

    constructor(context: vscode.ExtensionContext) {
        switch (process.platform) {
            case 'darwin': {
                this.PATH = process.env.HOME + '/Library/Application Support';
                this.OsType = OsType.Mac;
                break
            }
            case 'linux': {
                var os = require("os");
                this.PATH = os.homedir() + '/.config';
                this.OsType = OsType.Linux;
                break
            }
            case "win32": {
                this.PATH = process.env.APPDATA;
                this.OsType = OsType.Windows;
                break
            }
            default: {
                this.PATH = '/var/local';
                this.OsType = OsType.Linux;
            }
        }
    }
}