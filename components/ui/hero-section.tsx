import { Button } from "@nextui-org/react";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover shrink-0"
        src="https://plus.unsplash.com/premium_photo-1663045877671-1d6b29d19614?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="herosection"
      />
      <div className="absolute w-full h-screen bg-black/25"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-xl sm:text-2xl lg:text-2xl font-semibold space-y-6">
        {/* Texte principal */}
        <p>
          Des services de transport sur mesure pour une logistique sans faille
        </p>

        {/* Bouton bien espacé */}
        <Button color="primary">Souscrire nos services</Button>
      </div>
      {/* Bouton gauche */}
      <div className="absolute hidden sm:flex lg:flex left-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-black bg-white/90 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
        {"<"}
      </div>
      {/* Bouton droit */}
      <div className="absolute hidden sm:flex lg:flex right-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-black bg-white/90 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
        {">"}
      </div>
    </div>
  );
}
