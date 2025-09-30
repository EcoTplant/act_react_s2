import React from 'react';

export default function TarjetaGlobal({ titulo, contenido, color }) {
  return (
    <div
      className="tarjeta-global"
      style={color ? { borderColor: color } : undefined}
    >
      <h3 className="titulo-global">{titulo}</h3>
      <div className="contenido-global">{contenido}</div>
    </div>
  );
}
