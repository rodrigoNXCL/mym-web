// src/pages/Clients.jsx
import React, { useState } from "react";
import ClientCarousel from "../components/ClientCarousel";
import IndicatorsBar from "../components/IndicatorsBar";

export default function Clients() {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const handleChange = e =>
    setCreds({ ...creds, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: integrar login real
    alert("Funcionalidad de acceso de clientes pronto disponible.");
  };

  return (
    <>
      <section id="clientes" className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-textPrimary mb-12 text-center">
            Área de Clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Login */}
            <div className="bg-contentBg p-6 border border-headerFooterBg rounded-lg shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-textPrimary mb-1">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="correo@cliente.cl"
                    required
                    value={creds.email}
                    onChange={handleChange}
                    className="w-full bg-white p-3 border-2 border-headerFooterBg rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-textPrimary mb-1">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={creds.password}
                    onChange={handleChange}
                    className="w-full bg-white p-3 border-2 border-headerFooterBg rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="
          block w-full
          bg-headerFooterBg text-white
          font-semibold
          py-3 px-6
          rounded-lg shadow-md
          hover:bg-headerFooterBg/90 transition
        "
                >
                  Iniciar sesión
                </button>
              </form>
            </div>

            {/* Carrusel de logos */}
            <ClientCarousel />
          </div>
        </div>
      </section>

      {/* Barra de indicadores */}
      <IndicatorsBar />
    </>
  );
}
