#!/usr/bin/env node
const fs = require('fs');
const hostsFilePath = '/etc/hosts';

const removeBlock = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const fileLines = fileContent.split('\n');
  const startIndex = fileLines.indexOf(`## faceblock-start ##`);
  const endIndex = fileLines.indexOf(`## faceblock-end ##`);
  if (startIndex === -1 || endIndex === -1) return;
  fileLines.splice(startIndex, endIndex - startIndex + 1);
  const cleanContent = fileLines.join('\n');
  fs.writeFileSync(filePath, cleanContent);
};

const addBlock = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const fileLines = fileContent.split('\n');
  const blockingLines = [
    '## faceblock-start ##',
    '# Block Facebook',
    '127.0.0.1 www.facebook.com',
    '127.0.0.1 facebook.com',
    '127.0.0.1 static.ak.fbcdn.net',
    '127.0.0.1 www.static.ak.fbcdn.net',
    '127.0.0.1 login.facebook.com',
    '127.0.0.1 www.login.facebook.com',
    '127.0.0.1 fbcdn.net',
    '127.0.0.1 www.fbcdn.net',
    '127.0.0.1 fbcdn.com',
    '127.0.0.1 www.fbcdn.com',
    '127.0.0.1 static.ak.connect.facebook.com',
    '127.0.0.1 www.static.ak.connect.facebook.com',
    '# Block Youtube',
    '127.0.0.1 youtube.com',
    '127.0.0.1 www.youtube.com',
    '## faceblock-end ##'
  ];
  const blockingContent = fileLines.concat(blockingLines).join('\n');
  fs.writeFileSync(filePath, blockingContent);
};

// Process command line options
if (process.argv.includes('--on')) {
  // Remove the block if it exists
  removeBlock(hostsFilePath);
  // Add the blocking lines
  addBlock(hostsFilePath);
  console.log(`
  Facebook & Youtube has been disabled. Enjoy the focus.
`);
} else if (process.argv.includes('--off')) {
  removeBlock(hostsFilePath);
  console.log(`
  Facebook & Youtube has been enabled again.
`);
} else {
  // All other things should show "help"
  console.log(`
  Usage: faceblock [option]

  Options:

    --on    Turn on Facebook & Youtube blocking
    --off   Turn of Facebook & Youtube blocking
    --help  Show this help message
`);
}
