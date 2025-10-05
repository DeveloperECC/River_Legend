// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParquesLista from './paginas/ParquesLista';
import ParqueDetalle from './paginas/ParqueDetalle'; // Importa la nueva página de detalle
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ParquesLista />} />
          <Route path="/parque/:id" element={<ParqueDetalle />} />
          {/* Aquí puedes añadir más rutas si es necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;