import React from 'react';

export default function TarjetaDinamica({ titulo, contenido, colorFondo = '#ffffff', colorTexto = '#111', ancho = '320px', activo = false }) {
  const estilo = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: '14px',
    margin: '8px',
    borderRadius: '10px',
    boxShadow: activo ? '0 12px 30px rgba(0,0,0,0.12)' : '0 6px 14px rgba(0,0,0,0.06)',
    transform: activo ? 'translateY(-6px)' : 'none',
    transition: 'all 0.18s ease',
  };

  return (
    <div style={estilo}>
      <h4 style={{ margin: '0 0 8px 0' }}>{titulo}</h4>
      <div style={{ lineHeight: 1.6 }}>{contenido}</div>
    </div>
  );
}
