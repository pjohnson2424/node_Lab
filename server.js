"use strict";

/* import http from 'http' */
let http = require('http');
let facts = require('./facts.js');

let server = http.createServer((req, res) => {

res.writeHead(200, {"Content-type": "text/html"});

res.write(facts.randomFact(facts.factArray));    

res.end();

})
server.listen(3000);