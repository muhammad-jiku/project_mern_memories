import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import App from './App';
import './index.css';
import { reducers } from './reducers';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
