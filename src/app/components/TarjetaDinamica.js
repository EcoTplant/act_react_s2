import React from 'react';

export default function TarjetaDinamica({ titulo, contenido, colorFondo = 'rgba(255,255,255,0.04)', colorTexto = '#000', ancho = '320px', activo = false }) {
  const estilo = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: '14px',
    margin: '8px',
    borderRadius: '10px',
    boxShadow: activo ? '0 12px 30px rgba(0,0,0,0.6)' : '0 6px 14px rgba(0,0,0,0.4)',
    transform: activo ? 'translateY(-6px)' : 'none',
    transition: 'all 0.18s ease',
    border: '1px solid rgba(255,255,255,0.04)'
  };

  return (
    <div style={estilo}>
      <h4 style={{ margin: '0 0 8px 0', color: colorTexto }}>{titulo}</h4>
      <div style={{ lineHeight: 1.6, color: colorTexto }}>{contenido}</div>
    </div>
  );
}
