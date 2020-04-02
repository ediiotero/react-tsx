import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Albums from "./components/Albums";
import Details from "./components/Details";

// interface IAppProps {}

const App: React.FC = props => {
  return (
    <BrowserRouter>
      <main className="container">
        <Switch>
          <Route exact path="/" component={Albums} />
          <Route exact path="/:id/details" component={Details} />
          <Route path="/" render={() => <div>this is my 404</div>} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
