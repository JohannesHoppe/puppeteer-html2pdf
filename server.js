"use strict";

var express = require('express');
var Nightmare = require('nightmare');
var app = express();

app.get('/', function(req, res) {
  
    new Nightmare({ show: true })
        //.useragent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36')
        .viewport(1200, 950)
        .goto('http://haushoppe-its.de')
        .wait()
        .screenshot('screenshots/bbc.png')
        .run(function() {
            res.send('Screenshot has been captured');
        })
        .end();
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});