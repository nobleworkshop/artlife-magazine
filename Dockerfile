FROM node:22.12.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .
EXPOSE 8080
CMD ["npm","run", "dev", "-- --host"]

##docker run -p 8080:5173 artlife-magazine:1.0.0 npm run dev -- --host