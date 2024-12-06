import Link from "next/link";

export default function Searchbar1() {
    return (
        <div className="w-full py-8 px-4 bg-gray-200">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Titre */}
                <h1 className="text-black font-mono text-5xl text-center mb-6">
                    Transport de marchandises
                </h1>
                
                {/* Barre de recherche */}
                <div className="relative max-w-2xl mx-auto bg-white rounded-3xl">
                    <div className="flex items-center rounded-2xl shadow-lg">
                        <div className="p-4">
                            <img 
                                src="https://i.pinimg.com/736x/1d/6e/e4/1d6ee434ea8c501b266479ceeb3d95fa.jpg" 
                                alt="Icône de recherche" 
                                className="w-6 h-6 border-r-2 border-black/30 mr-2"
                            />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Rechercher un véhicule de transport de marchandises..." 
                            className="w-full py-4 pr-4 text-gray-700 bg-transparent outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}