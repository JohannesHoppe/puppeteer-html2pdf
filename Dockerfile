# much stuff was taken over from https://github.com/ivanvanderbyl/docker-nightmare/
# which bases on instructions from https://github.com/segmentio/nightmare/issues/224

FROM node:7.4

# downloads the package lists from the repositories and "updates" them
# to get information on the newest versions of packages and their dependencies
RUN apt-get -qq update

# installing the packages needed to run Nightmare
RUN apt-get -qq install -y \
  xvfb \
  x11-xkb-utils \
  xfonts-100dpi \
  xfonts-75dpi \
  xfonts-scalable \
  xfonts-cyrillic \
  x11-apps \
  clang \
  libdbus-1-dev \
  libgtk2.0-dev \
  libnotify-dev \
  libgnome-keyring-dev \
  libgconf2-dev \
  libasound2-dev \
  libcap-dev \
  libcups2-dev \
  libxtst-dev \
  libxss1 \
  libnss3-dev \
  gcc-multilib \
  g++-multilib

ENV DEBUG="nightmare"

# 1st adding dependencies (this way you don't rebuild your modules each time you re-build your container)
ADD package.json package.json
RUN npm install --silent

# 2n adding app code to the container
ADD . .


# Combining ENTRYPOINT and CMD allows you to specify the default executable for your image while
# also providing default arguments to that executable which may be overridden by the user.
# --> the command which is executed is a combination of the ENTRYPOINT and CMD values 
# (see https://www.ctl.io/developers/blog/post/dockerfile-entrypoint-vs-cmd/)

COPY entrypoint.sh /entrypoint
RUN chmod +x /entrypoint
ENTRYPOINT ["/entrypoint", "node", "--harmony-async-await"]

EXPOSE 8080
CMD ["index.js"]
