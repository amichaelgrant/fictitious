import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppError from "./AppError";
import './axiosSetup';
import './index.css';

ReactDOM.render(
  <AppError>
    <App/>
  </AppError>,
  document.getElementById('root')
);
