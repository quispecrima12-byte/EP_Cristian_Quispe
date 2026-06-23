"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [logueado, setLogueado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogueado(!!token);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-neutral-950/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl">
          UQ AI
        </Link>

        <ul className="hidden md:flex gap-8 items-center text-slate-300">
          <li>
            <a href="#servicios" className="hover:text-blue-400 transition">
              Servicios
            </a>
          </li>

          <li>
            <a href="#academy" className="hover:text-blue-400 transition">
              Academia
            </a>
          </li>

          <li>
            <a href="#lab" className="hover:text-blue-400 transition">
              Lab
            </a>
          </li>

          <li>
            <a href="#contacto" className="hover:text-blue-400 transition">
              Contacto
            </a>
          </li>

          {logueado ? (
            <li>
              <Link
                href="/dashboard"
                className="bg-blue-600 px-5 py-2 rounded-lg text-white font-semibold"
              >
                Dashboard
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className="border border-blue-500 text-blue-400 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Iniciar Sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}