FROM node:12.18.4-alpine3.9
RUN apk add --update nodejs npm
WORKDIR /usr/app/client
COPY client/package*.json client/.dockerignore ./
RUN npm install
COPY client/. ./
CMD ["npm", "start"]