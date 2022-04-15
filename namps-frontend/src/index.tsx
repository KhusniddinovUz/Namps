import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Theme from './Theme';
import { BrowserRouter as Router } from 'react-router-dom';
import './i18n';

ReactDOM.render(
  <Router>
    <Theme>
      <App />
    </Theme>
  </Router>,
  document.getElementById('root')
);
