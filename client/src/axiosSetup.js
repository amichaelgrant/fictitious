import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Authorization'] = "None";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 2500;

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
