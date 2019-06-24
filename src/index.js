import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';
import './scss/_index.css';
import App from './App';

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
