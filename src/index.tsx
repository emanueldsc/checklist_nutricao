import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './nutri_firebase';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);