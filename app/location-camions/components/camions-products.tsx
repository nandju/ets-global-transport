import Image from "next/image";
import Link from "next/link";

export default function CamionsProducts() {
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto px-4 py-12 space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
                        <div className="relative h-48">
                            <Image
                                src="https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg"
                                alt="Camion Benne"
                                width={400}
                                height={300}
                                className="object-cover w-full h-full"
                                unoptimized
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">
                                Camion Benne 3.5T
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Location de camion benne idéal pour vos travaux.
                            </p>
                            <Link href="#" className="inline-flex items-center bg-blue-600 text-white p-3 rounded-3xl hover:bg-blue-800">
                                LIRE PLUS
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-48">
                            <Image
                                src="https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg"
                                alt="Camion Plateau"
                                width={400}
                                height={300}
                                className="object-cover w-full h-full"
                                unoptimized
                            />
                        </div>
                        <div className="p-6">
                            
                            <h3 className="text-xl font-semibold mb-3">
                                Camion Plateau 3.5T
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Location de camion plateau pour transport de matériaux.
                            </p>
                            <Link href="#" className="inline-flex items-center bg-blue-600 text-white p-3 rounded-3xl hover:bg-blue-800">
                                LIRE PLUS
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-48">
                            <Image
                                src="https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg"
                                alt="Camion Frigorifique"
                                width={400}
                                height={300}
                                className="object-cover w-full h-full"
                                unoptimized
                            />
                        </div>
                        <div className="p-6">
                            
                            <h3 className="text-xl font-semibold mb-3">
                                Camion Frigorifique
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Location de camion frigorifique pour vos produits frais.
                            </p>
                            <Link href="#" className="inline-flex items-center bg-blue-600 text-white p-3 rounded-3xl hover:bg-blue-800">
                                LIRE PLUS
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-48">
                            <Image
                                src="https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg"
                                alt="Camion Benne"
                                width={400}
                                height={300}
                                className="object-cover w-full h-full"
                                unoptimized
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">
                                Camion Benne 3.5T
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Location de camion benne idéal pour vos travaux.
                            </p>
                            <Link href="#" className="inline-flex items-center bg-blue-600 text-white p-3 rounded-3xl hover:bg-blue-800">
                                LIRE PLUS
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-48">
                            <Image
                                src="https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg"
                                alt="Camion Plateau"
                                width={400}
                                height={300}
                                className="object-cover w-full h-full"
                                unoptimized
                            />
                        </div>
                        <div className="p-6">
                            
                            <h3 className="text-xl font-semibold mb-3">
                                Camion Plateau 3.5T
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Location de camion plateau pour transport de matériaux.
                            </p>
                            <Link href="#" className="inline-flex items-center bg-blue-600 text-white p-3 rounded-3xl hover:bg-blue-800">
                                LIRE PLUS
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-48">
                            <Image
                                src="https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg"
                                alt="Camion Frigorifique"
                                width={400}
                                height={300}
                                className="object-cover w-full h-full"
                                unoptimized
                            />
                        </div>
                        <div className="p-6">
                            
                            <h3 className="text-xl font-semibold mb-3">
                                Camion Frigorifique
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Location de camion frigorifique pour vos produits frais.
                            </p>
                            <Link href="#" className="inline-flex items-center bg-blue-600 text-white p-3 rounded-3xl hover:bg-blue-800">
                                LIRE PLUS
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}