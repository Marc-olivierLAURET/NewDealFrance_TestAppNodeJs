FROM node:12.18.4-alpine3.9
RUN apk add --update nodejs npm
WORKDIR /usr/app/server
COPY server/package*.json server/.dockerignore ./
RUN npm install
COPY server/. ./
CMD ["npm", "start"]