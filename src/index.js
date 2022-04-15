import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from "./redux/rootReducer";
import { createStore } from "redux";
import {Provider} from "react-redux";
import App from './App';
import './assets/styles/styles.scss'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
