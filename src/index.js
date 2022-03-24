import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import state from './redux/state.js'

ReactDOM.render(
  <React.StrictMode>
    <App state = {state} />
  </React.StrictMode>,
  document.getElementById('root')
);


