FROM nginx:latest

WORKDIR /opt/fictitious
COPY ./ /opt/fictitious/
RUN yarn build
EXPOSE 3000
CMD ["nginx"]
