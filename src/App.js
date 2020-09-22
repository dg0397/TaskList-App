import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'wouter';

import Header from 'components/Header'
import Footer from 'components/Footer'

import Home from "pages/Home"
import Login from "pages/Login"
import Register from "pages/Register"
import Dashboard from "pages/Dashboard"

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header/>
        <div className = "App-Main">
          <Switch>
            <Route path = '/' component = {Home} />
            <Route path = '/login' component = {Login} />
            <Route path = '/register' component = {Register} />
            <Route path = '/dashboard/:id' component = {Dashboard} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
