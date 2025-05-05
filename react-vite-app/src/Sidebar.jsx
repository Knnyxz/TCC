import React, { useState } from 'react';

const sidebarMain = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2C5.58 2 2 5.13 2 9.13c0 2.13 1.19 4.06 3.13 5.31-.11.41-.4 1.47-.47 1.74-.08.3.11.41.34.3.14-.07 1.38-.81 1.95-1.15.97.19 2 .3 3.05.3 4.42 0 8-3.13 8-7.13S14.42 2 10 2Z" fill="#fff"/></svg>
    ),
    label: 'APIStruct',
    active: true,
  },
  {
    icon: <i className="bi bi-diagram-3" style={{color: "#FFD600", fontSize: 20}}></i>,
    label: 'Fluxogramas',
  },
  {
    icon: <i className="bi bi-database" style={{color: "#00BFFF", fontSize: 20}}></i>,
    label: 'Banco de dados ou diagramas',
  },
  {
    icon: <i className="bi bi-braces" style={{color: "#8E44AD", fontSize: 20}}></i>,
    label: 'API',
  }
];

const projetos = [
  {
    nome: 'Api para site de nutricionista',
    opcoes: [
      { icon: <i className="bi bi-diagram-3" style={{color: "#FFD600", fontSize: 18}}></i>, label: 'Fluxogramas' },
      { icon: <i className="bi bi-database" style={{color: "#00BFFF", fontSize: 18}}></i>, label: 'Banco de dados ou diagramas' },
      { icon: <i className="bi bi-braces" style={{color: "#8E44AD", fontSize: 18}}></i>, label: 'API' },
    ]
  },
  {
    nome: 'Api para site de sla oq',
    opcoes: [
      { icon: <i className="bi bi-diagram-3" style={{color: "#FFD600", fontSize: 18}}></i>, label: 'Fluxogramas' },
      { icon: <i className="bi bi-database" style={{color: "#00BFFF", fontSize: 18}}></i>, label: 'Banco de dados ou diagramas' },
      { icon: <i className="bi bi-braces" style={{color: "#8E44AD", fontSize: 18}}></i>, label: 'API' },
    ]
  }
];

export default function Sidebar({ minimized, setMinimized }) {
  const [expanded, setExpanded] = useState(null);

  const toggleProject = idx => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <aside
      className={`sidebar d-flex flex-column justify-content-between${minimized ? ' sidebar-minimized' : ''}`}
      style={{
        width: minimized ? 68 : 260,
        background: '#202123',
        minHeight: '100vh',
        transition: 'width 0.35s cubic-bezier(.4,1.4,.6,1), background 0.2s',
        borderRight: '1.5px solid #23242b',
        zIndex: 2
      }}
    >
      <div>
        <div className="sidebar-header p-4 pb-2 fw-bold fs-4 text-white"
          style={{
            minHeight: 56,
            paddingBottom: 0,
            paddingTop: minimized ? 12 : undefined,
            paddingLeft: minimized ? 0 : undefined,
            paddingRight: minimized ? 0 : undefined,
            justifyContent: minimized ? 'center' : undefined,
            alignItems: minimized ? 'flex-start' : undefined
          }}
        >
          <div
            className="d-flex align-items-center w-100"
            style={{
              justifyContent: minimized ? 'center' : 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              minHeight: 0,
              height: minimized ? 44 : undefined,
              width: '100%'
            }}
          >
            {!minimized && (
              <button
                className="btn btn-sm btn-dark d-flex align-items-center justify-content-center"
                style={{borderRadius: 8, width: 36, height: 36, fontSize: 18, background: '#23232b', border: '1px solid #23242b'}}
                title="Novo projeto"
                onClick={() => alert('Criar novo projeto')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z" fill="currentColor"></path>
                </svg>
              </button>
            )}
            <div className="d-flex align-items-center" style={{gap: 8}}>
              {!minimized && (
                <button
                  className="btn btn-sm btn-dark d-flex align-items-center justify-content-center"
                  style={{borderRadius: 8, width: 36, height: 36, fontSize: 18, background: '#23232b', border: '1px solid #23242b'}}
                  title="Pesquisar projetos"
                  onClick={() => alert('Pesquisar projetos')}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="13.5" y1="13.5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              )}
              <button
                className="btn btn-sm btn-dark d-flex align-items-center justify-content-center"
                style={{borderRadius: 8, width: 36, height: 36, fontSize: 18, background: '#23232b', border: '1px solid #23242b'}}
                onClick={() => setMinimized(!minimized)}
                title={minimized ? 'Expandir menu' : 'Minimizar menu'}
              >
                <i className={`bi ${minimized ? 'bi-arrow-bar-right' : 'bi-arrow-bar-left'}`}></i>
              </button>
            </div>
          </div>
        </div>
        <nav className="sidebar-nav">
          <div className="sidebar-section-title text-secondary ms-3 mb-2 mt-2 fw-semibold" style={{fontSize: '1.05rem', letterSpacing: 0.2, display: minimized ? 'none' : undefined}}>Projetos</div>
          <ul className="list-unstyled mb-0">
            {projetos.map((projeto, idx) => (
              <React.Fragment key={projeto.nome}>
                <li
                  className={`sidebar-item d-flex align-items-center justify-content-between fw-semibold text-light px-3 py-2 rounded-2 ${expanded === idx ? 'bg-dark' : ''}`}
                  style={{cursor: 'pointer', userSelect: 'none', paddingLeft: minimized ? 10 : 24, paddingRight: minimized ? 10 : 24, justifyContent: minimized ? 'center' : 'space-between'}}
                  onClick={() => !minimized && toggleProject(idx)}
                  data-tooltip={minimized ? projeto.nome : undefined}
                >
                  <span style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: minimized ? 'none' : 'inline'}}>{projeto.nome}</span>
                  <span style={{display: minimized ? 'block' : 'none'}}><i className="bi bi-folder2" style={{fontSize: 20, color: '#8e8ea0'}}></i></span>
                  {!minimized && (
                    <i className={`bi ${expanded === idx ? 'bi-chevron-up' : 'bi-chevron-down'} ms-2`} style={{fontSize: 16, color: '#8e8ea0'}}></i>
                  )}
                </li>
                {!minimized && expanded === idx && (
                  <ul className={`list-unstyled ms-4 mt-2 mb-2 sidebar-project-options expanded`}>
                    {projeto.opcoes.map(opt => (
                      <li key={opt.label} className="sidebar-item d-flex align-items-center gap-2 py-1 text-light" style={{fontSize: '1rem', cursor: 'pointer'}}>
                        <span>{opt.icon}</span>
                        {opt.label}
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
      {/* <div className="sidebar-footer p-3">
        <button className="sidebar-upgrade w-100 btn btn-dark fw-bold rounded-3">Renovar o Plus</button>
      </div> */}
    </aside>
  );
} 