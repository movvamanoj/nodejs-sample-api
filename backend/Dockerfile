FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY backend/ .


FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

RUN npm cache clean --force && rm -rf /root/.npm

EXPOSE 3001

CMD ["node", "index.js"]



# FROM node:18-alpine

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY backend/ .

# EXPOSE 3001

# CMD ["node", "index.js"]
