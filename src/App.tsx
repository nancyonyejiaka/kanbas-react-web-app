import React from 'react';
import Labs from './Labs';
import Kanbas from './Kanbas';
import './App.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <h1> Nancy Onyejiaka </h1>
        <h2> CS 5610: Web Development, SEC 02, Summer Full 2024 </h2>
        <h3>
          <a
            id="wd-github"
            href="https://github.com/nancyonyejiaka/kanbas-react-web-app"
          >
            Kanbas Repository
          </a>
        </h3>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
