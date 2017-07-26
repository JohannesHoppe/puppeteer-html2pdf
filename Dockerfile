FROM node:8.2

# 1st adding dependencies (this way you don't rebuild your modules each time you re-build your container)
ADD package.json .
 
RUN npm install

# 2n adding app code to the container
ADD . .

EXPOSE 8080
CMD ["npm", "run"]  