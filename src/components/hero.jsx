// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[80vh] overflow-hidden"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        {/* Animación Ken Burns ejecutándose en el fondo */}
        <div
          className="absolute inset-0 bg-center bg-cover animate-kenburns"
          style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
        />
        {/* Overlay semitransparente */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido Z10: flex para ponerlo al fondo */}
      <div className="
        relative z-10
        flex flex-col justify-end items-center
        h-full text-center
        px-4 sm:px-6 lg:px-8
        pb-12 sm:pb-16 md:pb-20
      ">
        <h1 className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          font-bold text-white drop-shadow-lg
          leading-tight sm:leading-snug md:leading-normal
        ">
          Bienvenido a <span className="text-accent">Asesorías Contables M & M</span>
        </h1>
        <p className="
          mt-2
          text-sm sm:text-base md:text-lg
          text-white drop-shadow
          max-w-2xl
        ">
          Soluciones integrales para tu empresa.
        </p>
        </div>
      </section>

      {/* Botón de 'Contáctanos' inmediatamente debajo del Hero */}
      <div className="container mx-auto px-6 mt-8 text-center">
        <Link
          to="/contacto"
          className="inline-block bg-headerFooterBg text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-headerFooterBg/90 transition"
        >
          Contáctanos
        </Link>
      </div>
    </>
  );
}
