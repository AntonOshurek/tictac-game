import React from 'react';
import { createRoot } from 'react-dom/client';
//store
import { Provider } from 'react-redux';
import { store } from './store/store';
//components
import App from './app/App';
//styles
import './index.scss';
import './variables/variables.scss';
import './global/global-styles.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
