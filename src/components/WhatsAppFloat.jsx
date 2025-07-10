import React from "react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/56984453074"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed right-6 bottom-6
        bg-[#25D366] hover:bg-[#1ebe57]
        p-4 rounded-full
        shadow-lg hover:shadow-xl
        transition
        z-50
      "
      aria-label="Chatea con nosotros por WhatsApp"
    >
      {/* Icono SVG de WhatsApp */}
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="whatsapp"
        className="w-6 h-6 text-white"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M380.9 97.1C339 55.2 283.5 32 224 32 100.3 32 0 132.3 0 256c0 45 11.8 88.6 34.2 127L0 480l99.4-32.8c37.6 20.5 79.8 31.4 124.6 31.4 123.7 0 224-100.3 224-224 0-59.5-23.2-115-65.1-157zM224 438.4c-40.1 0-79.2-10.7-113.4-30.9l-8.1-4.8-59.1 19.5 19.9-57.7-5-8.1c-19.6-31.7-29.8-68.3-29.8-106.4 0-107.2 87.2-194.4 194.4-194.4 51.9 0 100.7 20.2 137.5 56.9 36.8 36.8 56.9 85.6 56.9 137.5 0 107.2-87.2 194.4-194.4 194.4zm101.3-138.2c-5.5-2.7-32.4-16-37.4-17.8-5-1.8-8.6-2.7-12.2 2.7s-14 17.8-17.2 21.5c-3.2 3.7-6.5 4.2-12 1.4-32.4-16.2-53.6-29-75.1-65.6-5.7-9.8 5.7-9.1 16.3-30.4 1.8-3.7.9-6.9-.5-9.6-1.4-2.7-12.2-29.4-16.7-40.3-4.4-10.7-8.9-9.2-12.2-9.4-3.2-.3-6.9-.3-10.6-.3s-9.6 1.4-14.6 6.9c-5 5.5-19 18.6-19 45.4s19.5 52.7 22.2 56.3c2.7 3.7 38.3 58.5 92.8 82.1 13 5.6 23.1 8.9 31 11.4 13 4 24.8 3.4 34.1 2.1 10.4-1.4 32.4-13.2 36.9-26 4.5-12.8 4.5-23.7 3.2-26.1-1.3-2.4-5-3.7-10.6-6.4z"
        />
      </svg>
    </a>
  );
}
