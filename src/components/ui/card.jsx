
import React from 'react';

export function Card({ children }) {
  return (
    <div style={{
      padding: '1rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: 'white',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      {children}
    </div>
  );
}
