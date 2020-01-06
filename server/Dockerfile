FROM node:latest
WORKDIR /opt/server
COPY ./ /opt/server/
RUN npm install
EXPOSE 8000
ENV DEBUG="server:*"
CMD ["node", "/opt/server/server.js"]
