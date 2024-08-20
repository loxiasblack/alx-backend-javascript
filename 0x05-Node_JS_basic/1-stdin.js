const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.output,
});

console.log('Welcome to Holberton School, what is your name?');

r1.question('', (name) => {
  console.log(`Your name is: ${name}`);
});

r1.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
