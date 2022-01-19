import React from 'react';
import './App.css';
import Home from "./landing/Home";
import Explore from "./components/Explore";
import About from "./components/About";
import Starred from './components/Starred';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Explore} exact path="/explore" />
          <Route component={Starred} path='/starred' />
          <Route component={About} exact path="/about" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
