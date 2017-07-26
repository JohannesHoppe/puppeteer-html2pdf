# nightmare-html2pdf

![Screenshot](screenshot.png)

The worlds most simplest website to PDF converter, based on [express](http://expressjs.com/) and [Chromeless}(https://github.com/graphcool/chromeless) (previously [nightmare](http://www.nightmarejs.org/)).

## Howto
```
npm i
npm start
```

Browse to http://localhost:3000/ and start converting websites to PDF files.  
Review the requirements if it doesn't work.

## Docker

A prepared docker image is available, too.

```
docker pull johanneshoppe/nightmare-html2pdf
```

You can build and run your own image via:

```sh
docker build -t html2pdf .
docker run -p 8080:8080 html2pdf
```

## Requirements

1. [electron-prebuilt](https://github.com/electron-userland/electron-prebuilt) downloads binaries, see [#21](https://github.com/electron-userland/electron-prebuilt/issues/21) if you need to setup a proxy server
2. ES6 Fat-arrow operator is used, which is available since node 4.4.5.
3. A X11 display server  must be running. On windows this is not required, of course.

# License

[The MIT License (MIT)](LICENSE)  

Copyright (c) 2017 Johannes Hoppe  