const ghpages = require('gh-pages');
const shell = require('shelljs');
const chalk = require('chalk');

const targetFolder = './site'

// 发布
ghpages.publish(targetFolder, {
    branch: 'gh-pages',
}, (err) => {
    if(err) {
        console.log(chalk.red(err));
    } else {
        shell.rm('-rf', targetFolder);
        console.log(chalk.green('site同步完成!'));
    }
});