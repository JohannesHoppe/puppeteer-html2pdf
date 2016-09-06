"use strict";

var express = require('express');
var Nightmare = require('nightmare');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/pdf', (req, res) => {

    var url = req.param('url')
    url = url || 'data:;charset=utf-8,No%20url%20given%21';

    new Nightmare({ show: false })
        .goto(url)
        .wait()
        .pdf({printBackground: true})
        .run((error, pdfBuffer) => {

            if (error) {
                return res.status(500).send(error)
            }

            res.set('Content-Type', 'application/pdf');
            res.send(new Buffer(pdfBuffer, 'binary'))
        })
        .end();
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});