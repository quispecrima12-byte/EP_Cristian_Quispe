export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral-950 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(135deg, #020617 0%, #111827 50%, #1e293b 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <p className="text-blue-400 font-semibold tracking-widest mb-4">
          UQ AI TECHNOLOGY
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Soluciones digitales con
          <span className="block text-blue-400">
            Inteligencia Artificial
          </span>
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mb-10">
          Implementamos automatización, analítica de datos e inteligencia
          artificial para mejorar la eficiencia de las organizaciones.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#servicios"
            className="bg-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition"
          >
            Ver Servicios
          </a>

          <a
            href="#contacto"
            className="border border-slate-600 px-8 py-4 rounded-lg font-bold hover:border-blue-400 hover:text-blue-400 transition"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}