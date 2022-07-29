var http = require('http');

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
}).listen(4000, (() => console.log(`Ready on http://localhost:4000`))); 