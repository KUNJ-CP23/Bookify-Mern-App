import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Book from './Pages/Books';
import AddBook from './Pages/AddBook';
import DetailBook from './Pages/DetailBook';
import { useState } from 'react';
import AboutUs from './Pages/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book/:id" element={<DetailBook/>} />
        <Route path="/addbook" element={<AddBook/>} />
        <Route path="/book/edit/:bookId" element={<AddBook />} />
        <Route path="/about" element={<AboutUs/>}></Route>

      </Route>
    </Routes>
  </BrowserRouter>
);