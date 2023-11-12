# Dockerfile para o Nodejs
FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "start" ]
