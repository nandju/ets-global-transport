import Link from "next/link";

export default function Header1(){
    return(
        <div className="relative flex items-center justify-between w-full h-screen">
  <img
    className="absolute inset-0 w-full h-full object-cover shrink-0"
    src="https://i.pinimg.com/736x/e1/65/e8/e165e87225ceecf4e06fa814081010fe.jpg"
    alt="herosection"
  />
  <div className="absolute w-full h-screen bg-black/25"></div>
  <div className="absolute bottom-2 right-2 flex flex-col items-center justify-center text-center text-white text-xs font-semibold space-y-6 font-mono bg-black/40 rounded-2xl h-2/5 w-1/4 p-8 m-4">
    {/* Texte principal */}
    <p>ETS Global Transport met à disposition son expertise et ses équipements modernes pour vos projets de travaux publics, garantissant flexibilité et qualité dans toutes vos réalisations.</p>

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