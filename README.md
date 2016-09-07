# nightmare-html2pdf

![Screenshot](screenshot.png)

The worlds most simplest website to PDF converter, based on [express](http://expressjs.com/) and [nightmare](http://www.nightmarejs.org/).

## Howto
```
npm i
npm start
```

Browse to http://localhost:3000/ and start converting websites to PDF files.


## Docker

A docker image is available, too.

```
docker pull johanneshoppe/nightmare-html2pdf
```

## Requirements

1. [electron-prebuilt](https://github.com/electron-userland/electron-prebuilt) downloads binaries, see [#21](https://github.com/electron-userland/electron-prebuilt/issues/21) if you need to setup a proxy server
2. Far arrow operator is used, which is available since node 4.4.5. However, the code was tested against **node 6.3 **only!


# License

[The MIT License (MIT)](LICENSE)  

Copyright (c) 2016 Johannes Hoppe  