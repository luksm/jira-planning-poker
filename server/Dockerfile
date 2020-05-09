FROM node

ENV PORT=3000

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/logs
RUN mkdir -p /usr/src/app/tmp

WORKDIR /usr/src/app

COPY . /usr/src/app/

EXPOSE 3000
EXPOSE 10010

ENTRYPOINT ["npm", "run", "start:server"]
