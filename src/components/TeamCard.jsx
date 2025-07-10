// src/components/TeamCard.jsx
import React from "react";

export default function TeamCard({ imgSrc, name, title, description }) {
  return (
    <div className="bg-contentBg rounded-lg shadow-md overflow-hidden border border-headerFooterBg">
      <img src={imgSrc} alt={name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-textPrimary mb-2">{name}</h3>
        <p className="text-textSecondary italic mb-4">{title}</p>
        <p className="text-textSecondary">{description}</p>
      </div>
    </div>
  );
}
