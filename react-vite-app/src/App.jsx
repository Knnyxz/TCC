import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Login from './Login';
import Cadastro from './Cadastro';

// Componente de partículas de fundo
function BgParticles() {
  // 12 partículas em posições e tamanhos aleatórios
  const particles = Array.from({length: 12}).map((_, i) => {
    const size = Math.random() * 32 + 18;
    const left = Math.random() * 95;
    const top = Math.random() * 90;
    return (
      <div key={i} className="particle" style={{width: size, height: size, left: `${left}%`, top: `${top}%`}} />
    );
  });
  return <div className="bg-particles">{particles}</div>;
}

function MainContent() {
  return (
    <main className="main-content flex-grow-1 d-flex flex-column" style={{background: 'transparent', minHeight: '100vh'}}>
      <header className="main-header d-flex justify-content-between align-items-center p-4 pb-0">
        <span className="main-title fw-bold fs-5 text-white">APIStruct</span>
        <div className="main-header-actions">
          <div className="main-header-user bg-dark text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width: 32, height: 32}}>IT</div>
        </div>
      </header>
      <section className="main-center flex-grow-1 d-flex flex-column align-items-center justify-content-center" style={{width: '100%'}}>
        <h1 className="center-title fw-bold text-white mb-4" style={{fontSize: '2.2rem'}}>Como posso ajudar ?</h1>
        <div className="center-input-box p-5 rounded-5" style={{minWidth: 600, maxWidth: 800, width: '100%', boxShadow: '0 8px 32px 0 #00000022', border: '1.5px solid #23242b', paddingTop: 36, paddingBottom: 28}}>
          <div className="input-row position-relative mb-4" style={{display: 'flex', alignItems: 'center'}}>
            <input type="text" placeholder="Pergunte alguma coisa" className="center-input form-control pe-5" style={{border: 'none', fontWeight: 500, borderRadius: 12, boxShadow: '0 1px 6px #00000018', height: 44, fontSize: 18}} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [sidebarMin, setSidebarMin] = useState(false);
  return (
    <Router>
      <BgParticles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/*" element={
          <div className="app-container d-flex flex-row" style={{minHeight: '100vh', width: '100vw', position: 'relative'}}>
            <Sidebar minimized={sidebarMin} setMinimized={setSidebarMin} />
            <MainContent />
          </div>
        } />
      </Routes>
    </Router>
  );
}
