FROM node:latest

RUN apt-get install -y wget gnupg
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
RUN echo "deb [ arch=amd64 ] http://repo.mongodb.com/apt/ubuntu bionic/mongodb-enterprise/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-enterprise.list
RUN apt-get update
RUN apt-get install -y mongodb-enterprise

#WORKDIR /opt/fictitious
#COPY ./ /opt/fictitious/
#RUN npm install
#EXPOSE 3000
#CMD ["node", "/opt/fictitious/server.js"]
