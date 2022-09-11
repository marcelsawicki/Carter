import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { SportStoreDataStore } from './data/DataStore';
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import { ShopConnector } from './shop/ShopConnector';

export default class App extends Component {
  render(){
    return <div>
      <h1>hello </h1>
      <Provider store={SportStoreDataStore} >
      <BrowserRouter>
        <Routes>
          <Route path="/shop" component={ShopConnector}></Route>
        </Routes>
        </BrowserRouter>
      </Provider>
      </div>
    }
}
