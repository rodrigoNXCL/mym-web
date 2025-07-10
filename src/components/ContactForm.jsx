// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xeokbrwk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block text-textPrimary mb-1">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre completo"
          required
          value={form.name}
          onChange={handleChange}
          className="
            w-full bg-white
            p-3 border-2 border-headerFooterBg
            rounded focus:outline-none focus:ring-2 focus:ring-accent
          "
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-textPrimary mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@correo.cl"
          required
          value={form.email}
          onChange={handleChange}
          className="
            w-full bg-white
            p-3 border-2 border-headerFooterBg
            rounded focus:outline-none focus:ring-2 focus:ring-accent
          "
        />
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block text-textPrimary mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="¿En qué podemos ayudarte?"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="
            w-full bg-white
            p-3 border-2 border-headerFooterBg
            rounded resize-none
            focus:outline-none focus:ring-2 focus:ring-accent
          "
        />
      </div>

      {/* Botón */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="
          block w-full
          bg-headerFooterBg text-white
          font-semibold
          py-3 px-6
          rounded-lg shadow-md
          hover:bg-headerFooterBg/90 transition
        "
      >
        {status === "sending"
          ? "Enviando…"
          : status === "success"
          ? "¡Enviado!"
          : status === "error"
          ? "Error, inténtalo otra vez"
          : "Enviar mensaje"}
      </button>
    </form>
  );
}
