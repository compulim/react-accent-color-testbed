import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { PaletteProvider } from 'react-accent-color';

ReactDOM.render(
  <PaletteProvider accent="#0078D7">
    <App />
  </PaletteProvider>,
  document.getElementById('root')
);
registerServiceWorker();
