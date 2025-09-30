import React from 'react';

export default function TarjetaGlobal({ titulo, contenido, color = 'rgba(255,255,255,0.03)' }) {
	return (
		<div className="tarjeta-global" style={{ background: color }}>
			<h3 className="titulo-global">{titulo}</h3>
			<p className="contenido-global">{contenido}</p>
		</div>
	);
}
