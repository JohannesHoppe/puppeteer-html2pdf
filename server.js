const express = require('express');
const asyncHandler = require('express-async-handler')
const puppeteer = require('puppeteer');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/pdf', asyncHandler(async (req, res) => {

  let url = req.param('url');
  url = (url && url !== 'http://') ? url : 'data:;charset=utf-8,No%20url%20given%21';

  console.log('Requesting:', url);

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle2' });
  var pdfBuffer = await page.pdf({
    printBackground: true,
    margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    format: 'A4'
  });
  await browser.close();

  console.log('Delivering PDF of', pdfBuffer.length, 'bytes');
  
  res.set('Content-Type', 'application/pdf');
  res.set('Content-Disposition: attachment; filename=file.pdf');
  res.send(new Buffer(pdfBuffer, 'binary'));  
}));


app.listen(PORT, () => {
  console.log('html2pdf: Listening on port %s', PORT);
});