import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Home } from './Pages/Home';
import { About } from './Pages/About/About';
import {NotFound} from './Pages/NotFound';
import { Hardware } from './Pages/Categorias/hardware';
import { Notebooks } from './Pages/Categorias/notebook';
import { Periféricos } from './Pages/Categorias/perifericos';
import { Carrinho } from './Pages/Carrinho';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/quemsomos" element={<About/>} />
                <Route path="/hardware" element={<Hardware/>} />
                <Route path="/notebook" element={<Notebooks/>} />
                <Route path="/perifericos" element={<Periféricos/>} />
                <Route path="/carrinho" element={<Carrinho/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
        <Footer />
      </BrowserRouter>   
    </div>
  );
}

export default App;
