import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';
import UsersPage from './components/UsersPage';
import UserDetail from './components/UserDetail';
import GitHubUserFinder from './components/GitHubUserFinder';

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/github" element={<GitHubUserFinder />} />
      </Routes>

  );
};

export default App;