import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Pages/Home/Index';
import Navbar from './Components/Utility/Navbar';
import Footer from './Components/Utility/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
