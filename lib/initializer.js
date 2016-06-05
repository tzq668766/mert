
const fs = require('fs');
const path = require('path');
const os = require('os');
const clc = require('cli-color');

function init(type) {
  var mertrc = (type === 'global') ? path.join(os.homedir(), '.mertrc') :
                                     path.join(process.cwd(), '.mertrc');

  if (fs.existsSync(mertrc)) {
    return console.log(clc.red(`.mertrc file already exists at: ${mertrc}`));
  }

  console.log(clc.green(
    `Creating new mertrc file ${ (program.init === 'global') ? 'in home dir' : '' }`
  ));

  fs.createReadStream('./templates/.mertrc').pipe(fs.createWriteStream(mertrc));
  return;
}

module.exports = { init };