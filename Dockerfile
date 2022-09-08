FROM node:14.17.0-alpine

RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*

RUN mkdir -p /app
WORKDIR  /app

COPY . /app/

RUN yarn

VOLUME /app

CMD ["yarn","prod"]
