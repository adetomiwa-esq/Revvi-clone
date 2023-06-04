import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Pages/Home/Index';
import PayProgram from './Pages/PayProgramFee/PayProgram';
import MailOffer from './Pages/AcceptMailOffer/MailOffer';
import Rewards from './Pages/Reward/Rewards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/pay-program' element={<PayProgram />} />
        <Route path='/pre-approvedrevvi' element={<MailOffer />} />
        <Route path='/rewards' element={<Rewards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
