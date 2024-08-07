FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY frontend/ .

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

RUN npm cache clean --force && rm -rf /root/.npm

EXPOSE 3000

CMD ["node", "index.js"]

