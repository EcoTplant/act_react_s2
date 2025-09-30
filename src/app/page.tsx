import Image from "next/image";
import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-12" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <main className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Demostración de tarjetas - distintos métodos de estilo</h1>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>1) Tarjeta con CSS Global</h2>
          <TarjetaGlobal titulo="Global Card" contenido="Esta tarjeta utiliza clases globales definidas en globals.css." color="#ffffff" />
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>2) Tarjeta con CSS Modules</h2>
          <div className="flex gap-4 flex-wrap">
            <TarjetaModulo nombre="Módulo - Primaria" descripcion="Tarjeta con módulo CSS, variante primaria." categoria="primaria" variante="tarjetaPrimaria" />
            <TarjetaModulo nombre="Módulo - Secundaria" descripcion="Tarjeta con módulo CSS, variante secundaria." categoria="secundaria" variante="tarjetaSecundaria" />
            <TarjetaModulo nombre="Módulo - Éxito" descripcion="Tarjeta con módulo CSS, variante éxito." categoria="exito" variante="tarjetaExito" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>3) Tarjeta con estilos en línea</h2>
          <div className="flex gap-4 flex-wrap">
            <TarjetaDinamica titulo="Dinámica Inactiva" contenido="Fondo claro, no activa." colorFondo="#f8fafc" colorTexto="#0f172a" ancho="300px" activo={false} />
            <TarjetaDinamica titulo="Dinámica Activa" contenido="Fondo verde, activa." colorFondo="#ecfdf5" colorTexto="#065f46" ancho="320px" activo={true} />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>4) Tarjeta con Tailwind CSS</h2>
          <div className="flex gap-4 flex-wrap">
            <TarjetaTailwind titulo="Tailwind Card" descripcion="Estilizada con clases de Tailwind." imagen="/file.svg" etiqueta="Demo" />
          </div>
        </section>
      </main>
    </div>
  );
}
