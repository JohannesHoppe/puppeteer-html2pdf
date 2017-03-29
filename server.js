"use strict";

var express = require('express');
var Nightmare = require('nightmare');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/pdf', (req, res) => {

    var url = req.param('url');
    url = (url && url !== 'http://') ? url : 'data:;charset=utf-8,No%20url%20given%21';

    console.log('Requesting:', url);
    
    var nightmare = new Nightmare({ 
        show: false,
        gotoTimeout: 10 * 1000, // in ms
        loadTimeout: 10* 1000 // in ms
    });

    nightmare
        .goto(url)
        .title()
        .then(function (title) {
            return nightmare
                .pdf({
                    printBackground: true,
                    marginsType: 0,
                    pageSize: 'A4',
                    landscape: false
                 })
                .run((error, pdfBuffer) => {
                    console.log('Delivering PDF of', pdfBuffer.length, 'bytes');
                  
                    res.set('Content-Type', 'application/pdf');
                    res.set('Content-Disposition: attachment; filename=' + title +'.pdf');
                    res.send(new Buffer(pdfBuffer, 'binary'));
                });
        });
});


app.listen(8080, () => {
    console.log('Listening on port 8080!');
});