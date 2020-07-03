import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import ThemeContext from '../src/context/ThemeContext';

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById('root'),
);
