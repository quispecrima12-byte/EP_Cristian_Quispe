"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });

  const [respuesta, setRespuesta] = useState("");
  const [loading, setLoading] = useState(false);

  const cambiar = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:8080/api/leads", form);

      setRespuesta("Solicitud registrada correctamente.");

      setForm({
        nombre: "",
        email: "",
        empresa: "",
        telefono: "",
        mensaje: "",
      });
    } catch {
      setRespuesta("No fue posible registrar la solicitud.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="bg-neutral-950 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 tracking-widest font-semibold mb-3">
            CONTACTO
          </p>

          <h2 className="text-5xl font-bold mb-4">
            Solicite información
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Complete el formulario y nuestro equipo se comunicará con usted.
          </p>
        </div>

        <form
          onSubmit={enviar}
          className="bg-slate-900 border border-slate-800 p-10 rounded-xl"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              name="nombre"
              value={form.nombre}
              onChange={cambiar}
              placeholder="Nombre completo"
              required
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-400 outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={cambiar}
              type="email"
              placeholder="Correo electrónico"
              required
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-400 outline-none"
            />

            <input
              name="empresa"
              value={form.empresa}
              onChange={cambiar}
              placeholder="Empresa"
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-400 outline-none"
            />

            <input
              name="telefono"
              value={form.telefono}
              onChange={cambiar}
              placeholder="Teléfono"
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-400 outline-none"
            />
          </div>

          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={cambiar}
            rows={5}
            placeholder="Mensaje"
            className="w-full mt-5 p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-400 outline-none"
          />

          <button
            disabled={loading}
            className="mt-6 w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-500 transition"
          >
            {loading ? "Enviando..." : "Enviar Solicitud"}
          </button>

          {respuesta && (
            <p className="text-center text-blue-300 mt-5">
              {respuesta}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}