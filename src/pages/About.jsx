// src/pages/About.jsx
import React from "react";
import TeamCard from "../components/TeamCard";
import WhatsAppFloat from "../components/WhatsAppFloat";

const teamMembers = [
  {
    imgSrc: "/equipo1.jpg",
    name: "Graciela Martinez",
    title: "Socia Gerente - Contadora Senior",
    description:
      "Con 15+ años de experiencia en auditoría y asesoría financiera, Graciela lidera proyectos de implementación contable y optimización de procesos.",
  },
  {
    imgSrc: "/equipo2.jpg",
    name: "Jose Llanca",
    title: "Asesor contable",
    description:
      "Especialista en normativa tributaria, Jose brinda soluciones personalizadas y está siempre al día con los cambios tributarios en Chile.",
  },
];

export default function About() {
  return (
    <section id="quienes-somos" className="bg-background pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texto + logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Bloque de texto con ancho máximo y justificado */}
          <div className="max-w-2xl mx-auto prose prose-lg prose-text-textPrimary">
            <h2 className="text-4xl font-bold text-textPrimary">Quiénes Somos</h2>
            <p className="text-textSecondary text-justify">
              En <strong>M &amp; M Asesorías</strong>, nos enorgullecemos de ser un referente en servicios
              contables y administrativos en Chile, con más de una década de experiencia respaldando el
              crecimiento de pequeñas y medianas empresas.
            </p>
            <p className="text-textSecondary text-justify">
              Nuestro equipo de profesionales altamente calificados ha estado al frente de la industria
              durante más de 10 años, ofreciendo soluciones contables y administrativas adaptadas a las
              necesidades únicas de cada cliente. Combinamos un profundo conocimiento técnico con la última
              tecnología y un servicio personalizado y cercano que nos distingue en el mercado.
            </p>
            <p className="text-textSecondary text-justify">
              <strong>Nuestra misión</strong> es simple pero poderosa: liberarte de las preocupaciones
              administrativas para que puedas enfocarte en lo que más te apasiona, el crecimiento de tu negocio.
            </p>
            <p className="text-textSecondary text-justify">
              Nos esforzamos por mantener tus finanzas en perfecto orden, garantizando que tus números estén
              siempre actualizados y en regla, cumpliendo con todas las normativas y requisitos legales.
              Nuestro compromiso no tiene límites, y trabajamos con pasión para asegurarte que cada detalle
              esté perfectamente gestionado.
            </p>
            <p className="text-textSecondary text-justify">
              Conoce a nuestro equipo de expertos y descubre por qué somos el aliado estratégico que tu empresa necesita.
            </p>
            <p className="text-textSecondary text-justify">
              En <strong>M &amp; M Asesorías</strong>, no solo ofrecemos servicios contables; ofrecemos una
              <em> asociación confiable y duradera</em> que te permitirá alcanzar tus metas empresariales con
              confianza y seguridad. ¡Únete a nosotros y déjanos mostrarte cómo podemos transformar tu negocio!
            </p>
          </div>
          {/* Logo alineado al inicio de la columna */}
          <div className="flex justify-center md:justify-end self-start">
            <img
              src="/logo-transparent.png"
              alt="Logo M y M Asesorías"
              className="h-39 w-auto"
            />
          </div>
        </div>

        {/* Fichas del equipo */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>
      <WhatsAppFloat />
    </section>
  );
}
