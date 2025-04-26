import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--furia-dark))] text-white py-3 border-t border-[hsl(var(--furia-light))]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-sm">
              &copy; 2025 Desenvolvido por{" "}
              <span className="font-bold text-[hsl(var(--furia-blue))]">
                Erick de Castro Souza
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              FURIA CS2 Chatbot | Atualizado em abril de 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}