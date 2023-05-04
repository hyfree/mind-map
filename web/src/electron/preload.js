const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('platform', process.platform)
contextBridge.exposeInMainWorld('IS_ELECTRON', true)

contextBridge.exposeInMainWorld('electronAPI', {
    minimize: () => ipcRenderer.send('minimize'),
    maximize: () => ipcRenderer.send('maximize'),
    unmaximize: () => ipcRenderer.send('unmaximize'),
    close: () => ipcRenderer.send('close'),
    create: (id) => ipcRenderer.send('create', id),
    getFileContent: (id) => ipcRenderer.invoke('getFileContent', id),
    save: (id, data) => ipcRenderer.invoke('save', id, data),
    rename: (id, name) => ipcRenderer.invoke('rename', id, name),
    openUrl: (url) => ipcRenderer.send('openUrl', url),
    getRecentFileList: () => ipcRenderer.invoke('getRecentFileList'),
    clearRecentFileList: () => ipcRenderer.invoke('clearRecentFileList'),
    openFileInDir: (file) => ipcRenderer.send('openFileInDir', file),
    deleteFile: (file) => ipcRenderer.invoke('deleteFile', file),
    onRefreshRecentFileList: (callback) => ipcRenderer.on('refreshRecentFileList', callback),
    openFile: (file) => ipcRenderer.send('openFile', file),
    selectOpenFile: () => ipcRenderer.send('selectOpenFile'),
})