// src/pages/Services.jsx
import React from "react";
import ServiceCard from "../components/ServiceCard";
import WhatsAppFloat from "../components/WhatsAppFloat";

const services = [
  {
    image: "/services1.jpg",
    title: "Planes de Contabilidad",
    price: "$45.000",
    features: [
      "Contador asignado",
      "Gestión remuneraciones",
      "Gestión Previsional",
      "Impuestos mensuales",
      "Renta"
    ],
    whatsappQuery: "Hola, me interesa información sobre Planes de Contabilidad",
  },
  {
    image: "/services2.jpg",
    title: "Creación de Empresas",
    price: "$34.990",
    features: [
      "Proceso en Empresa en un dia",
      "Redacción de Estatutos",
      "Firma en Registro de Sociedades",
      "Obtención de RUT",
      "Gestión de Patente",
      "Gestión de Cuenta Bancaria"
    ],
    whatsappQuery: "Hola, me interesa información sobre Creación de Empresas",
  },
  {
    image: "/services3.jpg",
    title: "Dirección Tributaria",
    price: "$45.000",
    features: [
      "Registro patente municipal",
      "Recepción de correspondencia",
      "Asesoría en SII",
      "Asesoría Imagen Comercial",
      "Desarrollo Web",
    ],
    whatsappQuery: "Hola, me interesa información sobre Dirección Tributaria",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-background pt-28 pb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-textPrimary mb-4 text-center">
          Nuestros Servicios
        </h2>
        <p className="text-textSecondary mb-8 text-center">
          Te ofrecemos una gama de soluciones para tu gestión contable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ image, title, price, features, whatsappQuery }) => (
            <ServiceCard
              key={title}
              image={image}
              title={title}
              price={price}
            >
              <ul className="prose prose-sm prose-text-textSecondary list-disc list-inside space-y-2">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <a
                  href={`https://wa.me/56984453074?text=${encodeURIComponent(whatsappQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block bg-headerFooterBg text-white
                    font-semibold py-2 px-4 rounded
                    shadow hover:bg-headerFooterBg/90 transition
                  "
                >
                  Más Información
                </a>
              </div>
            </ServiceCard>
          ))}
        </div>
      </div>
      <WhatsAppFloat />
    </section>
  );
}
