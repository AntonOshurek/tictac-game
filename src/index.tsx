import React from 'react';
import { createRoot } from 'react-dom/client';
//store
import { Provider } from 'react-redux';
import { store } from './app/store';
//components
import App from './App';
//styles
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
