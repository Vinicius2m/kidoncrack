const exect = require('child_process').exec;
const path = require('path');
const fs = require('fs');

const mainPath = path.dirname(fs.realpathSync(__filename));
const soundPath = path.join(mainPath, './kidoncrack');

const kidoncrack = () => {
  const linuxcmd = `paplay ${soundPath}.ogg`;
  const windowscmd =
    path.join(mainPath, './forWindows.vbs') + ' ' + soundPath + '.mp3';
  const maccmd = `afplay ${soundPath}.mp3`;

  const platform = process.platform;

  if (platform === 'linux') {
    return exec(linuxcmd);
  }
  if (platform === 'win32') {
    return exec(windowscmd);
  }
  if (platform === 'darwin') {
    return exec(maccmd);
  }

  function exec(cmd) {
    return exect(cmd, function (error, stdout, stderr) {
      if (error) console.error(error);
    });
  }
};

module.exports = kidoncrack;

if (!module.parent) {
  kidoncrack();
}
