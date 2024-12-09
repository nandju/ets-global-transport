

export default function Header1(){
    return(
        <div className="relative flex items-center justify-between w-full h-screen">
  <img
    className="absolute inset-0 w-full h-full object-cover shrink-0"
    src="https://i.pinimg.com/236x/23/f8/30/23f830f66a7c746e99a6b32fb177be5e.jpg"
    alt="herosection"
  />
  <div className="absolute w-full h-screen bg-black/25"></div>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-6xl font-semibold space-y-6 font-mono p-8 m-4">
    {/* Texte principal */}
    <p>Contactez-nous</p>
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