import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, redirect } from 'react-router-dom';
import NotFound from './Routes/NotFound';
import Home from './Routes/Home';
import Navbar from './Components/Navbar';
import Projects from './Routes/Projects';

function App() {
  return (
    <Routes>
      <Route 
        path={'/'}
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route 
        path={'/projects'}
        element={
          <>
            <Navbar />
            <Projects />
          </>
        }
      />
      <Route 
        path="*" 
        element={
          <NotFound />
        } 
      />
    </Routes>
  );
}

export default App;
