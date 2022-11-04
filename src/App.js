import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Container from './Components/Container';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Home } from './Pages/Home';
import { About } from './Pages/About/About';
import {NotFound} from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
            <Container customClass="min-height">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/quemsomos" element={<About/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
              </Container>
        <Footer />
      </BrowserRouter>   
    </div>
  );
}

export default App;
