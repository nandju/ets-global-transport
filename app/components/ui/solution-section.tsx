import Link from "next/link";


export default function Solution(){
    return(
        <div className="flex flex-col justify-around m-6">
            <div className="flex flex-col justify-center gap-2">
                <div className="font-mono text-5xl font-semibold text-start mx-3">Nos Solutions</div>
                <div className="flex flex-row justify-between gap-4 m-3">
                    <div className="font-bold text-xl my-2">Découvrez une gamme complète de services adaptés à vos besoins</div>
                    <button className="bg-white text-black p-2 rounded-xl border-2 hover:bg-gray-200">En savoir plus {">"}</button>
                </div>
            </div>
            <div className="flex flex-row justify-around gap-4 flex-wrap">
                <div className="flex flex-col bg-white rounded-xl shadow-lg w-72">
                    <div className="bg-emerald-200 p-4 rounded-t-xl">
                        <img 
                            className="w-full h-40 object-cover" 
                            src="https://i.pinimg.com/736x/1b/c9/f8/1bc9f81dcdbf01c665801c42a5fbadd1.jpg" 
                            alt="benne" 
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Camions-bennes</h2>
                        <p className="text-gray-600 mb-4">
                            Transport de matériaux lourds avec bennes arrière ou latérales (jusqu&apos;à 30 tonnes)
                        </p>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                            En savoir plus
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl shadow-lg w-72">
                    <div className="bg-emerald-200 p-4 rounded-t-xl">
                        <img 
                            className="w-full h-40 object-cover" 
                            src="https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg" 
                            alt="citerne" 
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Camions-citernes</h2>
                        <p className="text-gray-600 mb-4">
                            Transport de liquides avec des citernes de 5 000 à 30 000 litres
                        </p>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                            En savoir plus
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl shadow-lg w-72">
                    <div className="bg-emerald-200 p-4 rounded-t-xl">
                        <img 
                            className="w-full h-40 object-cover" 
                            src="https://i.pinimg.com/736x/58/46/ab/5846ab96c2d8306fc3ffa97a1297cbd5.jpg" 
                            alt="plateau" 
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Camions plateaux</h2>
                        <p className="text-gray-600 mb-4">
                            Transport de marchandises volumineuses (10 à 40 tonnes)
                        </p>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                            En savoir plus
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl shadow-lg w-72">
                    <div className="bg-emerald-200 p-4 rounded-t-xl">
                        <img 
                            className="w-full h-40 object-cover" 
                            src="https://i.pinimg.com/736x/0b/2a/ee/0b2aee729838d793a0afb41ff4183537.jpg" 
                            alt="grues" 
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Camions-grues</h2>
                        <p className="text-gray-600 mb-4">
                            Manutention et transport de charges lourdes avec capacité de levage jusqu'à 50 tonnes
                        </p>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                            En savoir plus
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl shadow-lg w-72">
                    <div className="bg-emerald-200 p-4 rounded-t-xl">
                        <img 
                            className="w-full h-40 object-cover" 
                            src="https://i.pinimg.com/736x/69/e4/68/69e468c3b656a8711a1e381a786885d8.jpg" 
                            alt="national" 
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Transport national et régional</h2>
                        <p className="text-gray-600 mb-4">
                            Livraison en Côte d'Ivoire et pays voisins
                        </p>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                            En savoir plus
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl shadow-lg w-72">
                    <div className="bg-emerald-200 p-4 rounded-t-xl">
                        <img 
                            className="w-full h-40 object-cover" 
                            src="https://i.pinimg.com/736x/c2/09/8b/c2098bbe658dd4d3ffea9133f4b6ec10.jpg" 
                            alt="express" 
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Transport express</h2>
                        <p className="text-gray-600 mb-4">
                            Livraison rapide pour produits frais ou de valeur
                        </p>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                            En savoir plus
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl shadow-lg w-72">
                    <div className="bg-emerald-200 p-4 rounded-t-xl">
                        <img 
                            className="w-full h-40 object-cover" 
                            src="https://i.pinimg.com/736x/54/1c/91/541c91db81c3a1b265064188c9f1e448.jpg" 
                            alt="dedie" 
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Transport dédié</h2>
                        <p className="text-gray-600 mb-4">
                            Camion réservé à un seul client pour plus de sécurité
                        </p>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                            En savoir plus
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl shadow-lg w-72">
                    <div className="bg-emerald-200 p-4 rounded-t-xl">
                        <img 
                            className="w-full h-40 object-cover" 
                            src="https://i.pinimg.com/736x/1b/c9/f8/1bc9f81dcdbf01c665801c42a5fbadd1.jpg" 
                            alt="groupe" 
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Transport groupé</h2>
                        <p className="text-gray-600 mb-4">
                            Partage de camion pour réduire les coûts
                        </p>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}