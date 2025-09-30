import React from 'react';
import styles from './TarjetaModulo.module.css';

export default function TarjetaModulo({ nombre, descripcion, categoria = 'general', variante = 'tarjetaPrimaria' }) {
  const categoriaClass = {
    primaria: styles.categoriaPrimaria,
    secundaria: styles.categoriaSecundaria,
    exito: styles.categoriaExito,
  }[categoria] || '';

  const varianteClass = variante && styles[variante] ? styles[variante] : '';

  return (
    <div className={`${styles.tarjeta} ${varianteClass}`}>
      <div className={styles.encabezado}>
        <h4 className={styles.titulo}>{nombre}</h4>
        <span className={`${styles.categoria} ${categoriaClass}`}>{categoria}</span>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
}
