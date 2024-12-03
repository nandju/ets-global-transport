import Link from "next/link";

export default function Hero(){
    return(
        <div className="relative flex items-center justify-between w-full h-screen">
  <img
    className="absolute inset-0 w-full h-full object-cover shrink-0"
    src="https://i.pinimg.com/736x/c2/a7/30/c2a730ef2713e75fe9da9def5c7b17e3.jpg"
    alt="herosection"
  />
  <div className="absolute w-full h-screen bg-black/25"></div>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-2xl font-semibold font-roboto space-y-6">
    {/* Texte principal */}
    <p>Des services de transport sur mesure pour une logistique sans faille</p>

    {/* Bouton bien espacé */}
    <button className="bg-white text-black px-8 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition">
      Souscrire nos services
    </button>
  </div>
  {/* Bouton gauche */}
  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-black bg-white/90 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
    {"<"}
  </div>
  {/* Bouton droit */}
  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-black bg-white/90 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
    {">"}
  </div>
</div>

    )
}