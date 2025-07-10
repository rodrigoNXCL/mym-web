import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

// Importa cada página
import Home     from "./Home";
import Services from "./Services";
import Contact  from "./Contact";
import Clients  from "./Clients";
import Footer   from "../components/Footer";
import About    from "./About";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/servicios"  element={<Services />} />
          <Route path="/contacto"   element={<Contact />} />
          <Route path="/clientes"   element={<Clients />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
