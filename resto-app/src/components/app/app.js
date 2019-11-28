import React from "react";
import { MainPage, CartPage } from "../pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../app-header";

import Background from "./food-bg.jpg";

const App = () => {
  return (
    <Router>
      <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
        <AppHeader />
        <Switch>
          <Route path="/menu">
            <MainPage/>
          </Route>
          <Route path="/cart">
            <CartPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;