# Dockerfile para o Nodejs
FROM node:latest

WORKDIR /app-vuejs

COPY . /app-vuejs

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "yarn", "serve" ]