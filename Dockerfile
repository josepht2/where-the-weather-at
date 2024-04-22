FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080 3000