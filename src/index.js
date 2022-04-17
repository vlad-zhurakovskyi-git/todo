import React from 'react';
import ReactDOM from 'react-dom/client';
import rootReducer from "./redux/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from './App';
import './assets/styles/styles.scss'

const loggerMiddleware = store => next => action => {
  const result = next(action);
  console.log('middleware', result, store.getState());
  return result;
};

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
