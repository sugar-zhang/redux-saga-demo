import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import sagaStore from './saga/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={sagaStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
