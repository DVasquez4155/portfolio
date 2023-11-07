FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

WORKDIR /usr/src/app/public 
RUN npm install
WORKDIR /usr/src/app/api
RUN npm install
WORKDIR /usr/src/app
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080

WORKDIR /usr/src/app/api

CMD [ "npm", "start" ]