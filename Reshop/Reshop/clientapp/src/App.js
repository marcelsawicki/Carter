import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { SportStoreDataStore } from './data/DataStore';
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter as Router, Switch, Redirect  } from "react-router-dom";
import { ShopConnector } from './shop/ShopConnector';

export default class App extends Component {
  render(){
    return <div>
      <Provider store={SportStoreDataStore} >
      <Router>
        <Switch>
          <Route path="/shop" component={ShopConnector}></Route>
          <Redirect to="/shop" />
        </Switch>
        </Router>
      </Provider>
      </div>
    }
}
