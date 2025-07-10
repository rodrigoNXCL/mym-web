// src/components/ClientCarousel.jsx
import React from "react";

const clientLogos = [
  "/clientes/muevo.jpg",
  "/clientes/nexo.png",
  "/clientes/vmp.png",
  // …añade tantos como necesites
];
// Duplicamos la lista para scroll continuo
const logosDuplicated = [...clientLogos, ...clientLogos];

export default function ClientCarousel() {
  return (
    <div className="bg-contentBg border border-headerFooterBg rounded-lg p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-textPrimary text-center mb-6">
        Confían en nosotros!
      </h3>
      <div className="overflow-hidden">
        <div className="flex items-center justify-center animate-slide whitespace-nowrap">
          {logosDuplicated.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Cliente ${i+1}`}
              className="h-24 mx-8 inline-block object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}