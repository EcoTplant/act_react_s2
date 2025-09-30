import TarjetaGlobal from './components/TarjetaGlobal';


export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20">
      <main className="max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Demostración de tarjetas (CSS Global, CSS Modules, Inline, Tailwind)</h1>

        <section>
          <h2 className="text-lg font-semibold mb-3">Parte 1 — Tarjeta con estilos globales</h2>
          <TarjetaGlobal titulo="Global Card" contenido="Esta tarjeta usa clases globales desde globals.css" color="#60a5fa" />
        </section>
      </main>
    </div>
  );
}