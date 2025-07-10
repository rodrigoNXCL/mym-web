// src/pages/Contact.jsx
import React from "react";
import ContactForm from "../components/ContactForm";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Contact() {
  return (
    <section id="contacto" className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-textPrimary mb-12 text-center">
          Contáctanos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario enmarcado */}
          <div className="bg-contentBg p-6 border border-headerFooterBg rounded-lg shadow-sm">
            <ContactForm />
          </div>

          {/* Mapa enmarcado */}
          <div className="bg-contentBg p-0 border border-headerFooterBg rounded-lg overflow-hidden shadow-sm">
            <iframe
              title="Ubicación M y M Asesorías"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.6843309064125!2d-72.12221862475546!3d-36.609911066199885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9668d7e042249fb9%3A0xf5b0fe842d695759!2sPje.%20Dos%20Central%2C%20Chill%C3%A1n%2C%20%C3%91uble!5e0!3m2!1ses-419!2scl!4v1751469339839!5m2!1ses-419!2scl"
              className="w-full h-96"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloat />
    </section>
  );
}
