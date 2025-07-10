// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menu = [
    { to: "/",          label: "Inicio" },
    { to: "/quienes-somos",  label: "Nosotros" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto",  label: "Contacto" },
    { to: "/clientes",  label: "Clientes" },
    
  ];

  return (
    <nav className="fixed w-full top-0 bg-headerFooterBg shadow-sm z-50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Espacio izquierdo vacío (podrías colocar logo aquí en interior) */}
        <div className="w-1/4"></div>

        {/* Menú desktop en la derecha */}
        <div className="hidden md:flex w-3/4 justify-end space-x-8 uppercase tracking-wide text-white">
          {menu.map(({ to, label }) => (
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
          ))}
        </div>

        {/* Toggle móvil a la derecha */}
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
          {menu.map(({ to, label }) => (
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
          ))}
        </div>
      )}
    </nav>
  );
}
