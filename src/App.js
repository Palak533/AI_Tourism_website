import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/services' Component={Services}/>
            <Route path='/products' Component={Products}/>
            <Route path='/sign-up' Component={SignUp}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
