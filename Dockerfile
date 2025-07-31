FROM node:22.12.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .
EXPOSE 8080