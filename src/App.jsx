import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Routes/NotFound';
import Home from './Routes/Home';
import AboutMe from './Routes/AboutMe';
import Navbar from './Components/Navbar';
import Projects from './Routes/Projects';
import Footer from './Components/Footer';
import Portos from './Routes/Portos';
import PosTeratai from './Routes/PosTeratai';
import WaveBox from './Components/WaveBox';
import Experiences from './Routes/Experiences';

function App() {
  return (
    <Routes>
      <Route 
        path={'/'}
        element={
          <>
            <Navbar />
            <Home />
            <WaveBox waveColor={'linear(to-r, #FFE6E8, #FFA7BC)'} fillColor={'#CD3C68'}/>
            <Experiences />
            <WaveBox waveColor={'linear(to-r, #CD3C68, #CD3C68)'} fillColor={'#FFA7BC'}/>
            <AboutMe />
            <Footer />
          </>
        }
      />
      <Route 
        path={'/projects'}
        element={
          <>
            <Navbar />
            <Projects />
            <Footer />
          </>
        }
      />
      <Route 
        path={'/portos'}
        element={
          <>
            <Navbar />
            <Portos />
            <Footer />
          </>
        }
      />
      <Route 
        path={'/portos/pos-teratai'}
        element={
          <>
            <Navbar />
            <PosTeratai />
            <Footer />
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
