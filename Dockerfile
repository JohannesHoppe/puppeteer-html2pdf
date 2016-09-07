FROM nodesource/node:6.3

ADD package.json package.json  
RUN npm install --production

ADD . .

EXPOSE 3000

CMD ["npm", "run", "startForever"] 