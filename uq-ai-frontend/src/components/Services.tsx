import {
  Bot,
  MessageSquare,
  Cpu,
  Building2,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Automatización IA",
      icon: <Bot size={40} />,
      desc: "Implementación de agentes inteligentes para procesos repetitivos.",
    },
    {
      title: "Chatbots",
      icon: <MessageSquare size={40} />,
      desc: "Asistentes virtuales para atención y soporte empresarial.",
    },
    {
      title: "Optimización de Procesos",
      icon: <Cpu size={40} />,
      desc: "Reducción de tiempos operativos mediante tecnología.",
    },
    {
      title: "Soluciones Empresariales",
      icon: <Building2 size={40} />,
      desc: "Herramientas digitales para empresas y organizaciones.",
    },
    {
      title: "Programación Segura",
      icon: <ShieldCheck size={40} />,
      desc: "Desarrollo con buenas prácticas de seguridad y protección de datos.",
    },
    {
      title: "Analítica de Datos",
      icon: <BarChart3 size={40} />,
      desc: "Procesamiento y análisis de información para la toma de decisiones.",
    },
  ];

  return (
    <section id="servicios" className="bg-neutral-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-blue-400 tracking-widest font-semibold mb-3">
          SERVICIOS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Tecnología aplicada al negocio
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-blue-500 transition"
            >
              <div className="mb-5 text-blue-400">
                {s.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {s.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}