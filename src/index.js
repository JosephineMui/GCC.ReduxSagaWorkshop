import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import configureStore from "./store/configureStore";
import { getGrades, getHandles } from './actions';

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

// Change to one action such as initialLoad and
// not having two dispatch
store.dispatch(getGrades());
store.dispatch(getHandles());

render(store);

