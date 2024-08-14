import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Ayuda from './components/Ayuda';
import Home from './components/Home';
import Destinos from './components/Destinos';
import Empresas from './components/Empresas';
import Evaluacion from './components/Evaluacion';
import EstrellasRating from './components/EstrellasRating';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Privacidad from './components/Privacidad';
import ListaAgencias from './components/ListaAgencias';
import ListaShalom from './components/ListaShalom';
import ListaDHL from './components/ListaDHL';
import ListaServientrega from './components/ListaServientrega';
import ListaFedEX from './components/ListaFedEx';
import ListaUps from './components/ListaUps';
import ListaUrbano from './components/ListaUrbano';
import ListaTransmar from './components/ListaTransmar';
import Perfil from './components/Perfil';
import EliminoCuenta from './components/EliminoCuenta';

function App() {
  const [userName, setUserName] = useState(localStorage.getItem('nombre') || '');
  const [userEmail, setUserEmail] = useState(localStorage.getItem('correo') || '');
  const [fotoPerfil, setFotoPerfil] = useState(localStorage.getItem('foto') || '/ruta/imagen/default.jpg');

  const handleLogout = () => {
    // Limpiar datos del perfil en localStorage
    localStorage.removeItem('nombre');
    localStorage.removeItem('usuario');
    localStorage.removeItem('correo');
    localStorage.removeItem('foto');
    
    // Limpiar el estado del usuario
    setUserName('');
    setUserEmail('');
    setFotoPerfil('/ruta/imagen/default.jpg');
  };

  return (
    <Router>
      <Header userName={userName} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/evaluacion" element={<Evaluacion />} />
          <Route path="/estrellas-rating" element={<EstrellasRating />} />
          <Route path="/rating-pagina" element={<div>Valoración...</div>} />
          <Route path="/mas-evaluaciones" element={<div>Más evaluaciones...</div>} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/inicio" element={<Inicio setUserName={setUserName} setUserEmail={setUserEmail} />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/lista-agencias" element={<ListaAgencias />} />
          <Route path="/lista-shalom" element={<ListaShalom />} />
          <Route path="/lista-dhl" element={<ListaDHL />} />
          <Route path="/lista-servientrega" element={<ListaServientrega />} />
          <Route path="/lista-fedex" element={<ListaFedEX />} />
          <Route path="/lista-ups" element={<ListaUps />} />
          <Route path="/lista-urbano" element={<ListaUrbano />} />
          <Route path="/lista-transmar" element={<ListaTransmar />} />
          <Route 
            path="/perfil" 
            element={<Perfil 
              userName={userName} 
              setUserName={setUserName} 
              setUserEmail={setUserEmail} 
              setFotoPerfil={setFotoPerfil} 
            />} 
          />
          <Route 
            path="/eliminar-cuenta" 
            element={<EliminoCuenta 
              setUserName={setUserName} 
              setUserEmail={setUserEmail} 
              setFotoPerfil={setFotoPerfil} 
            />} 
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
