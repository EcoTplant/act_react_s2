import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20">
      <main className="max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Demostración de tarjetas (CSS Global, CSS Modules, Inline, Tailwind)</h1>

        <section>
          <h2 className="text-lg font-semibold mb-3">Parte 1 — Tarjeta con estilos globales</h2>
          <TarjetaGlobal titulo="Global Card" contenido="Esta tarjeta usa clases globales desde globals.css" color="#60a5fa" />
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Parte 2 — Tarjeta con CSS Modules</h2>
          <div className="flex gap-4 flex-wrap">
            <TarjetaModulo nombre="Modulo Primario" descripcion="Estilo usando CSS Modules - primaria" categoria="primaria" variante="tarjetaPrimaria" />
            <TarjetaModulo nombre="Modulo Secundario" descripcion="Estilo usando CSS Modules - secundaria" categoria="secundaria" variante="tarjetaSecundaria" />
            <TarjetaModulo nombre="Modulo Éxito" descripcion="Estilo usando CSS Modules - exito" categoria="exito" variante="tarjetaExito" />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Parte 3 — Tarjeta con estilos en línea</h2>
          <div className="flex gap-4 flex-wrap">
            <TarjetaDinamica titulo="Dinámica Activa" contenido="Fondo azul y texto blanco, activa" colorFondo="#1e40af" colorTexto="#fff" ancho="300px" activo={true} />
            <TarjetaDinamica titulo="Dinámica Inactiva" contenido="Fondo gris y texto oscuro, inactiva" colorFondo="#f3f4f6" colorTexto="#111827" ancho="280px" activo={false} />
          </div>
        </section>


      </main>
    </div>
  );
}