import React from 'react';
import Image from 'next/image';


export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
  <div className="flex flex-col p-4 m-2 w-64 bg-slate-200 text-black border border-slate-300 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
      {imagen && (
        <div className="w-full h-36 relative mb-3 rounded overflow-hidden">
          <Image src={imagen} alt={titulo} fill sizes="(max-width: 256px) 100%" />
        </div>
      )}
      <div className="flex items-center justify-between mb-2">
        <h5 className="font-semibold text-lg">{titulo}</h5>
  {etiqueta && <span className="text-sm text-gray-700">{etiqueta}</span>}
      </div>
  <p className="text-sm text-slate-700">{descripcion}</p>
    </div>
  );
}
