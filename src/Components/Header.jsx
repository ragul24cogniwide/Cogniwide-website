import React from 'react';

const Header = () => {
  return (
    <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000
      }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>COGNIWIDE</div>
      <nav style={{ flex: 1 }}>
        <ul style={{
          display: 'flex',
          justifyContent: 'center',
          listStyleType: 'none',
          margin: 0,
          padding: 0
        }}>
          {['Products', 'Solutions', 'Services', 'Industries', 'Company', 'Contact'].map(item => (
            <li key={item} style={{ margin: '0 15px' }}>{item}</li>
          ))}
        </ul>
      </nav>
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Demo
      </button>
    </header>
  );
};

export default Header;

