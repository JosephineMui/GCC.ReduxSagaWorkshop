import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import configureStore from "./store/configureStore";
import { getProducts } from './actions';

const store = configureStore();

const render = (store) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}

render(store);
store.dispatch(getProducts());
