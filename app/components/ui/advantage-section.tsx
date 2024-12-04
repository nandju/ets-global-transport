import Link from "next/link";

export default function Advantage(){
    return(
        <div className="flex flex-col justify-around m-6">
            <div className="flex flex-row justify-between gap-2 m-3">
                <div className="font-mono text-5xl font-semibold text-start mx-3">Avantages</div>
                <button className="bg-white text-black p-2 rounded-xl border-2 hover:bg-gray-200">
                    En savoir plus {">"}
                </button>
            </div>
            
            <div className="flex flex-row gap-6 mt-4 items-start">
                {/* Article principal à gauche */}
                <div className="flex-1">
                    <div className="bg-white rounded-xl shadow-lg">
                        <div className="bg-emerald-200 p-4 rounded-t-xl">
                            <img 
                                className="w-full h-80 object-cover rounded-lg" 
                                src="https://groupelaure.fr/images/Diaporama/service-locations-camions-chauffeur.jpg"
                                alt="Avantages principaux" 
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">Notre Expertise</h2>
                            <p className="text-gray-600 mb-4">
                                Avec ETS Global Transport, bénéficiez d&apos;une expertise inégalée dans le transport 
                                et les travaux publics. Nos solutions sont conçues pour garantir fiabilité, 
                                sécurité et flexibilité, tout en s&apos;adaptant à vos besoins spécifiques.
                            </p>
                            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>

                {/* Articles secondaires à droite */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 gap-4">
                        {/* Article 1 */}
                        <div className="bg-white rounded-xl shadow-lg p-4 flex gap-4">
                            <div className="w-1/3">
                                <img 
                                    className="w-full h-32 object-cover rounded-lg" 
                                    src="https://i.pinimg.com/736x/ec/57/4f/ec574fdbf13c926dff253e8f80708804.jpg"
                                    alt="Fiabilité" 
                                />
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-xl font-bold mb-2">Fiabilité et sécurité</h3>
                                <p className="text-gray-600 text-sm">
                                    Des services sur mesure avec des équipements bien entretenus 
                                    et des normes de sécurité respectées.
                                </p>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="bg-white rounded-xl shadow-lg p-4 flex gap-4">
                            <div className="w-1/3">
                                <img 
                                    className="w-full h-32 object-cover rounded-lg" 
                                    src="https://i.pinimg.com/736x/16/c4/77/16c477e0f220cee376308aa58139aa36.jpg"
                                    alt="Performance" 
                                />
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-xl font-bold mb-2">Performance</h3>
                                <p className="text-gray-600 text-sm">
                                    Équipements modernes et une équipe qualifiée pour garantir 
                                    un travail de qualité.
                                </p>
                            </div>
                        </div>

                        {/* Article 3 */}
                        <div className="bg-white rounded-xl shadow-lg p-4 flex gap-4">
                            <div className="w-1/3">
                                <img 
                                    className="w-full h-32 object-cover rounded-lg" 
                                    src="https://i.pinimg.com/736x/86/a8/b3/86a8b3e8fcd1f357a82afa26399ed208.jpg"
                                    alt="Efficacité" 
                                />
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-xl font-bold mb-2">Économie et efficacité</h3>
                                <p className="text-gray-600 text-sm">
                                    Solutions rentables, avec des options optimisées pour 
                                    réduire les coûts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}