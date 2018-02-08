FROM node:9.3.0-alpine

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

CMD npm start
