import Vconsole from 'vconsole';

export function setupConsole() {
    if (window.App.device.env !== 'prod') {
        new Vconsole()
    }
}