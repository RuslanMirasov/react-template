import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PopupProvider } from './contexts/PopupContext';
import App from 'components/App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/deutscher_wortschatz_frontend">
      <PopupProvider>
        <App />
      </PopupProvider>
    </BrowserRouter>
  </React.StrictMode>
);
