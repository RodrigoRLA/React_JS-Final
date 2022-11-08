import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { About } from './Pages/About/About';
import { Carrinho } from './Pages/Carrinho';
import { Hardware } from './Pages/Categorias/hardware';
import { Notebooks } from './Pages/Categorias/notebook';
import { Perifericos } from './Pages/Categorias/perifericos';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Produtos } from './Pages/Produtos/index_produtos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="/quemsomos" element={<About/>} />
                <Route path="/hardware" element={<Hardware/>} />
                <Route path="/notebook" element={<Notebooks/>} />
                <Route path="/perifericos" element={<Perifericos/>} />
                <Route path="/carrinho" element={<Carrinho/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
        <Footer />
      </BrowserRouter>   
    </div>
  );
}

export default App;
