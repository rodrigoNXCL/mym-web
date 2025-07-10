import React from "react";

export default function ServiceCard({ image, title, price, children }) {
  return (
    <div className="bg-contentBg rounded-lg shadow-md overflow-hidden flex flex-col border border-headerFooterBg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-textPrimary uppercase mb-2">{title}</h3>
        <p className="text-lg font-bold text-textSecondary mb-4">Desde {price}</p>
        <div className="flex-1">
          {/* Aquí sí aplicas prose-sm */}
          <div className="prose prose-sm prose-text-textSecondary">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}