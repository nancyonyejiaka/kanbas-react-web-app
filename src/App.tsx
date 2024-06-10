import React from 'react';
import Labs from './Labs';
import Kanbas from './Kanbas';
import Landing from './Landing';
import './App.css';
import './index.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="h-100">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
