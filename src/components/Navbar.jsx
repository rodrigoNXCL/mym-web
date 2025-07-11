// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Añadimos external:true para distinguir enlaces internos de externos
  const menu = [
    { to: "/", label: "Inicio" },
    { to: "/quienes-somos", label: "Nosotros" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto", label: "Contacto" },
    { to: "/clientes", label: "Clientes" },
    { to: "https://accounts.zoho.com/", label: "Webmail", external: true },
  ];

  return (
    <nav className="fixed w-full top-0 bg-headerFooterBg shadow-sm z-50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Espacio izquierdo */}
        <div className="w-1/4"></div>

        {/* Menú desktop */}
        <div className="hidden md:flex w-3/4 justify-end space-x-8 uppercase tracking-wide text-white">
          {menu.map(({ to, label, external }) =>
            external ? (
              <a
                key={label}
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 transition hover:text-accent"
              >
                {label}
              </a>
            ) : (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `py-1 transition ${
                    isActive
                      ? "border-b-2 border-accent font-semibold"
                      : "hover:text-accent"
                  }`
                }
              >
                {label}
              </NavLink>
            )
          )}
        </div>

        {/* Toggle móvil */}
        <button
          className="md:hidden text-white text-2xl ml-auto"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-headerFooterBg border-t border-borderLight">
          {menu.map(({ to, label, external }) =>
            external ? (
              <a
                key={label}
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-white transition hover:bg-headerFooterBg/60"
              >
                {label}
              </a>
            ) : (
              <NavLink
                key={to}
                to={to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-3 text-white transition ${
                    isActive
                      ? "bg-headerFooterBg/80 font-semibold"
                      : "hover:bg-headerFooterBg/60"
                  }`
                }
              >
                {label}
              </NavLink>
            )
          )}
        </div>
      )}
    </nav>
  );
}
