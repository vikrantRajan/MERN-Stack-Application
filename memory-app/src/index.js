import dotenv from "dotenv";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import errorReporter from "./errorReporter";
import './index.css';
import { reducers } from './reducers';

dotenv.config();
errorReporter.client.report(new Error("faq example"));

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
