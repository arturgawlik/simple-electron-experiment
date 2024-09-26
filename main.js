import { app, BrowserWindow, ipcMain } from "electron/main";

function createWindow() {
  const preloadUrl = new URL("./preload.mjs", import.meta.url);

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: preloadUrl.pathname,
    },
  });

  win.loadFile("./index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  ipcMain.handle("ping", () => "pong");
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
