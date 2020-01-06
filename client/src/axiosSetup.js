import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_APIHOST || 'http://localhost:8000';
axios.defaults.headers.common['Authorization'] = "None";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 2500;

console.log("axios: ", axios, process);
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response && response.data;
}, function (error) {
  return Promise.reject(error);
});
