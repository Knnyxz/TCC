import React from 'react';
import { Link } from 'react-router-dom';

export default function Cadastro() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{background: '#343541'}}>
      <div className="p-5 rounded-5 shadow-lg" style={{background: '#23232b', minWidth: 350, maxWidth: 400, width: '100%', animation: 'fadeInScale 0.8s'}}>
        <h2 className="fw-bold text-white mb-4 text-center">Cadastro</h2>
        <form>
          <div className="mb-3">
            <label className="form-label text-light">Nome</label>
            <input type="text" className="form-control center-input" placeholder="Digite seu nome" required />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">E-mail</label>
            <input type="email" className="form-control center-input" placeholder="Digite seu e-mail" required />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Senha</label>
            <input type="password" className="form-control center-input" placeholder="Crie uma senha" required />
          </div>
          <div className="mb-4">
            <label className="form-label text-light">Confirmar senha</label>
            <input type="password" className="form-control center-input" placeholder="Confirme sua senha" required />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-4 fw-semibold py-2 mb-3">Cadastrar</button>
        </form>
        <div className="text-center mt-2">
          <span className="text-secondary">Já tem conta?</span> <Link to="/login" className="fw-semibold" style={{color: '#19c37d'}}>Entrar</Link>
        </div>
      </div>
    </div>
  );
} 