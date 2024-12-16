"use client"

import Link from "next/link";

type PublicsWork = {
    picture:string;
    title:string;
    subtitle:string;
    link:string;
}

const publicsWork: PublicsWork[] = [
    
]

export default function PublicsWork() {
    return (
        <div className=" p-16 bg-muted">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Bureau d&apos;études */}
                <div className="relative group h-[300px] w-full overflow-hidden bg-cover bg-center" 
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/49/71/21/49712189530a06a196ce2c356786e6e3.jpg')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-8 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Terrassement</h3>
                        <p className="text-sm mb-4 max-w-[250px]">
                        Travaux de préparation du terrain pour les constructions, incluant le nivellement, le creusage de tranchées, et la mise en forme du terrain.
                        </p>
                        <Link href="../travaux-publics/travaux-publics-details" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
                            En savoir plus
                        </Link>
                    </div>
                </div>

                {/* Béton bitumeux */}
                <div className="relative group h-[300px] w-full overflow-hidden bg-cover bg-center" 
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/e8/a8/aa/e8a8aa1cb5f2543b9a061045d02ed2e8.jpg')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-8 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Voirie et réseaux divers (VRD)</h3>
                        <p className="text-sm mb-4 max-w-[250px]">
                        Aménagement de routes, trottoirs, et installation de réseaux de canalisations et d&apos;évacuation.
                        </p>
                        <Link href="../travaux-publics/travaux-publics-details" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
                            En savoir plus
                        </Link>
                    </div>
                </div>

                {/* Aménagement qualitatif */}
                <div className="relative group h-[300px] w-full overflow-hidden bg-cover bg-center" 
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/59/93/60/5993601ae8283ce3c5c832925999befb.jpg')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-8 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Aménagement paysager</h3>
                        <p className="text-sm mb-4 max-w-[250px]">
                            Services de préparation des terrains pour des projets de jardins, espaces verts et parcs publics ou privés.
                        </p>
                        <Link href="../travaux-publics/travaux-publics-details" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
                            En savoir plus
                        </Link>
                    </div>
                </div>

                {/* Travaux routiers */}
                <div className="relative group h-[300px] w-full overflow-hidden bg-cover bg-center" 
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/6c/19/e4/6c19e469adaa09001ab977bd27d0bbdd.jpg')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-8 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Démolition contrôlée </h3>
                        <p className="text-sm mb-4 max-w-[250px]">
                        Services de démolition d’anciennes structures pour préparer le terrain en vue de nouveaux aménagements.
                        </p>
                        <Link href="../travaux-publics/travaux-publics-details" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
                            En savoir plus
                        </Link>
                    </div>
                </div>

                {/* Démolitions et déconstruction */}
                <div className="relative group h-[300px] w-full overflow-hidden bg-cover bg-center" 
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/c9/a8/4f/c9a84f3d83143dd961748ffab1f89e51.jpg')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-8 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Équipements spécialisés </h3>
                        <p className="text-sm mb-4 max-w-[250px]">
                        Pelle hydraulique, bulldozer, compacteur, chargeuse, camions-bennes, et autres matériels adaptés aux travaux publics.
                        </p>
                        <Link href="../travaux-publics/travaux-publics-details" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
                            En savoir plus
                        </Link>
                    </div>
                </div>

                {/* Travaux hydraulique */}
                <div className="relative group h-[300px] w-full overflow-hidden bg-cover bg-center" 
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/6c/08/d9/6c08d9a1e2b0985edfaa0a979d0085ab.jpg')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-8 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Équipes qualifiées</h3>
                        <p className="text-sm mb-4 max-w-[250px]">
                        Personnel formé et expérimenté pour la réalisation de travaux de terrassement, voirie et autres aménagements.                        </p>
                        <Link href="../travaux-publics/travaux-publics-details" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
                            En savoir plus
                        </Link>
                    </div>
                </div>
                <div className="relative group h-[300px] w-full overflow-hidden bg-cover bg-center" 
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/8a/ef/6f/8aef6ffc137bd60b472dcc242d243e14.jpg')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-8 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Respect des normes</h3>
                        <p className="text-sm mb-4 max-w-[250px]">
                        Travaux réalisés en conformité avec les normes de sécurité et de qualité locales et internationales.
                        </p>
                        <Link href="../travaux-publics/travaux-publics-details" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
                            En savoir plus
                        </Link>
                    </div>
                </div>
                <div className="relative group h-[300px] w-full overflow-hidden bg-cover bg-center" 
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/22/22/d5/2222d5ee0b00555eaf475e588915dbd1.jpg')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-8 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Gestion des déchets</h3>
                        <p className="text-sm mb-4 max-w-[250px]">
                        Système de gestion des déchets pour s&apos;assurer que les matériaux et débris issus des travaux sont correctement collectés, recyclés, ou éliminés.
                        </p>
                        <Link href="../travaux-publics/travaux-publics-details" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
                            En savoir plus
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}