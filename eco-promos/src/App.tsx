import React from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from "./routes/Layout/layout-container";
import Home from "./routes/home/home-container";
import Testing from "./routes/testing/testing-container";

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='testing' element={<Testing/>}/>
      </Route>     
    </Routes>
  );
}

export default App;
