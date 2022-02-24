
const os = require('os');
const user = os.userInfo();
// console.log(user);
console.log(`The system uptime is ${os.uptime()}`);

const curOs = {
    name: os.type(),
    release : os.release(),
    totalMem  : os.totalmem(),
    freeMem : os.freemem(),
};

console.log(curOs);
