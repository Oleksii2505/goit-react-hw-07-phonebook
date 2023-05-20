import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'App';
import { store, persistor } from 'components/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>   
    </Provider>
  </React.StrictMode>
);
// https://6468ee7703bb12ac20823844.mockapi.io/api/contacts/:endpoint