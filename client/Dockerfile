FROM ubuntu:18.04

RUN apt-get update
RUN apt-get install -y curl procps gnupg apt-utils net-tools nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

WORKDIR /opt/client
COPY ./ /opt/client/
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["node", "/opt/client/server.js"]
