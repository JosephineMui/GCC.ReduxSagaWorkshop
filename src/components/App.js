import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from './Main';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/:id" component={Main} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  )
}

export default App;
