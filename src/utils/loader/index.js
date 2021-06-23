import 'app-inject';

export function setupLoader(app) {
    // 加载资源
    if (window.App.device.env === 'dev') {
        window.__APP__ = app;
    }
}