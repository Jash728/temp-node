const { readFileSync, writeFileSync } = require('fs');
console.log("start");

const first = readFileSync('./contents/first.txt', 'utf8');
const second = readFileSync('./contents/second.txt', 'utf8');

// console.log(first, second);

writeFileSync('./contents/result-sync.txt', `Here are the results of ${first}, ${second}`, { flag: 'a' });
console.log("done with the task");
console.log("ending the task");