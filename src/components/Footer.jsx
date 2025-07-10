// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-headerFooterBg text-white py-12 border-t border-borderLight">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="uppercase tracking-wider text-sm font-semibold mb-4">
            M & M Asesorías
          </h3>
          <p>Calle Central 200, Villa San Pedro, Chillán, Ñuble.</p>
          <p>Tel: +56 9 8445 3074</p>
          <p>Email: contacto@asesoriasmm.cl</p>
        </div>
        <div className="text-center">
          <h3 className="uppercase tracking-wider text-sm font-semibold mb-4">
            Horario
          </h3>
          <p>Lun a Vie: 9:00 – 18:00</p>
          
        </div>
        <div className="text-center">
          <h3 className="uppercase tracking-wider text-sm font-semibold mb-4">
            Síguenos
          </h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-accent">LinkedIn</a>
            <a href="#" className="hover:text-accent">Facebook</a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/80">
  © {new Date().getFullYear()} desarrollado por{" "}
  <a
    href="https://www.nxchile.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent hover:underline"
  >
    nxCHILE
  </a>
  . Todos los derechos reservados.
</p>
    </footer>
  );
}
