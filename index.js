var http = require('http'); // This is how we require modules in Node.js

// This is a basic Node server //
http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("WHAT'S UP NODEVEMBER?!");
  response.end();
}).listen(8080, function(){

console.log('Listening on port 8080...');
});

// Let's send a file using Express! //
// var express = require('express');
// var app = express();
// var path = require('path');
//
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
//
// app.listen(8080);
