import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Categories from './redux/categories/categories';
import BookList from './components/bookList';
import './index.css';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
