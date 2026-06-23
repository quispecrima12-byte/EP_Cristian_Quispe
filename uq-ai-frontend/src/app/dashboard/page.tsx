"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Lead = {
  id: number;
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  mensaje: string;
  fechaRegistro: string;
};

export default function Dashboard() {
  const [rol, setRol] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const rolGuardado = localStorage.getItem("rol");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    setRol(rolGuardado || "");

    if (rolGuardado === "ADMIN") {
      axios
        .get("http://localhost:8080/api/leads", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setLeads(res.data))
        .catch(() => console.log("No se pudieron cargar leads"));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          Panel de Control
        </h1>

        <button
          onClick={logout}
          className="bg-slate-800 border border-slate-700 px-5 py-2 rounded-lg font-bold hover:bg-blue-600 transition"
        >
          Cerrar Sesión
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-bold text-blue-400">
          Gestión del Sistema
        </h2>

        <p className="mt-3 text-slate-300">
          Panel para administrar usuarios, leads y servicios registrados.
        </p>

        <p className="mt-4">
          Rol: <strong className="text-blue-400">{rol}</strong>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-bold text-blue-400">
            Usuarios
          </h3>
          <p className="text-3xl font-black mt-2">15</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-bold text-blue-400">
            Leads
          </h3>
          <p className="text-3xl font-black mt-2">{leads.length}</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-bold text-blue-400">
            Estado
          </h3>
          <p className="text-3xl font-black mt-2">Activo</p>
        </div>
      </div>

      {rol === "ADMIN" ? (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Leads Registrados
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-700">
              <thead>
                <tr className="bg-slate-800 text-blue-300">
                  <th className="p-3 border border-slate-700">Nombre</th>
                  <th className="p-3 border border-slate-700">Email</th>
                  <th className="p-3 border border-slate-700">Empresa</th>
                  <th className="p-3 border border-slate-700">Teléfono</th>
                  <th className="p-3 border border-slate-700">Mensaje</th>
                </tr>
              </thead>

              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-6 text-center text-slate-400 border border-slate-700"
                    >
                      No hay leads registrados.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-800/70">
                      <td className="p-3 border border-slate-700">
                        {lead.nombre}
                      </td>
                      <td className="p-3 border border-slate-700">
                        {lead.email}
                      </td>
                      <td className="p-3 border border-slate-700">
                        {lead.empresa}
                      </td>
                      <td className="p-3 border border-slate-700">
                        {lead.telefono}
                      </td>
                      <td className="p-3 border border-slate-700">
                        {lead.mensaje}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Perfil de Usuario
          </h2>

          <p className="text-slate-300">
            Como usuario USER puede visualizar su perfil y acceder a las
            funciones asignadas.
          </p>
        </div>
      )}
    </div>
  );
}