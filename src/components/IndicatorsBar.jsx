// src/components/IndicatorsBar.jsx
import React, { useEffect, useState } from "react";

export default function IndicatorsBar() {
  const [data, setData] = useState({ uf: "", utm: "", dolar: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://mindicador.cl/api"); 
        const json = await res.json();
        setData({
          uf: json.uf.valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" }),
          utm: json.utm.valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" }),
          dolar: json.dolar.valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" }),
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 600000); // cada 10 minutos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-headerFooterBg text-white py-2">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-around text-sm font-medium">
        <div>UF: <strong>{data.uf}</strong></div>
        <div>UTM: <strong>{data.utm}</strong></div>
        <div>Dólar: <strong>{data.dolar}</strong></div>
      </div>
    </div>
  );
}
