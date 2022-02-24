const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write('welcome to our home page');
    // res.end();
    if (req.url === '/') {
        res.end('welcome to our home page');
    } else if (req.url === '/about') {
        res.end('welcome to our about page');
    } else res.end(`
    <h1>Oops!</h1>
    <p>We can't find this page</p>
    <a href = '/'> back home </a>`);


});

server.listen(5000);

// Also we can do by this.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     // console.log(req);
//     // res.write('welcome to our home page');
//     // res.end();
//     if (req.url === '/') {
//         return res.end('welcome to our home page');
//     }
//     if (req.url === '/about') {
//         return res.end('welcome to our about page');
//     }
//     return res.end(`
//     <h1>Oops!</h1>
//     <p>We can't find this page</p>
//     <a href = '/'> back home </a>`);


// });

// server.listen(5000);