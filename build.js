var electronInstaller = require('electron-winstaller');

var settings = { appDirectory: './tictactoe-win32-x64', outputDirectory: './installer', authors: 'Meow :3', exe: './tictactoe.exe' };

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});