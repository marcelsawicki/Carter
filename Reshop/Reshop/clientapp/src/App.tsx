import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TasksList from './components/TasksList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import Message from './components/Message';
import OfferPage from './pages/Offer';
import CartPage from './pages/Cart';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product">
            <Route index element={<ProductPage />} />
            <Route path=":number" element={<ProductPage />} />
        </Route>
        <Route path="offer" element={<OfferPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
