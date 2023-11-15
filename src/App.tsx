import React from 'react';
import './App.css';
import { Sleep, AddLog } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sleep/>}/>
        <Route path='/add-log' element={<AddLog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
