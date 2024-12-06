import Link from "next/link";
import Image from "next/image";

export default function TransportItems() {
    return (
        <div className="flex flex-col gap-6 bg-gray-200">
            <div className="flex flex-row justify-between bg-gray-400 items-center m-3">
                <img src="https://i.pinimg.com/736x/69/e4/68/69e468c3b656a8711a1e381a786885d8.jpg" alt="transportpicture" className="w-1/2"/>
                <div className="flex flex-col justify-start items-start p-6">
                    <div className="text-2xl font-bold">Transport national et régional</div>
                    <div className="text-sm">Couverture de la Côte d’Ivoire et des pays voisins pour permettre une plus grande flexibilité dans la livraison des marchandises.</div>
                    <div>
                        <Link href="/transport-marchandises">
                            <button className="bg-black text-white px-4 py-2 rounded-lg">Je souhaite une estimation</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-between bg-gray-400 items-center m-3">
                <img src="https://i.pinimg.com/736x/c2/09/8b/c2098bbe658dd4d3ffea9133f4b6ec10.jpg" alt="transportpicture" className="w-1/2"/>
                <div className="flex flex-col justify-start items-start p-6">
                    <div className="text-2xl font-bold">Transport express </div>
                    <div className="text-sm">Solution dédiée aux marchandises nécessitant une livraison rapide, idéale pour les produits frais ou les marchandises à haute valeur ajoutée</div>
                    <div>
                        <Link href="/transport-marchandises">
                            <button className="bg-black text-white px-4 py-2 rounded-lg">Je souhaite une estimation</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row- justify-between bg-gray-400 items-center m-3">
                <img src="https://i.pinimg.com/736x/54/1c/91/541c91db81c3a1b265064188c9f1e448.jpg" alt="transportpicture" className="w-1/2"/>
                <div className="flex flex-col justify-start items-start p-6">
                    <div className="text-2xl font-bold">Transport dédié </div>
                    <div className="text-sm">Option permettant de dédier un camion exclusivement aux marchandises d’un client pour garantir la sécurité et minimiser les risques de mélange de cargaisons.</div>
                    <div>
                        <Link href="/transport-marchandises">
                            <button className="bg-black text-white px-4 py-2 rounded-lg">Je souhaite une estimation</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-between bg-gray-400 items-center m-3">
                <img src="https://i.pinimg.com/736x/1b/c9/f8/1bc9f81dcdbf01c665801c42a5fbadd1.jpg" alt="transportpicture" className="w-1/2"/>
                <div className="flex flex-col justify-start items-start p-6">
                    <div className="text-2xl font-bold">Transport groupé </div>
                    <div className="text-sm">Possibilité pour les clients de partager un camion pour réduire les coûts, particulièrement adapté pour les petites entreprises.</div>
                    <div>
                        <Link href="/transport-marchandises">
                            <button className="bg-black text-white px-4 py-2 rounded-lg">Je souhaite une estimation</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between bg-gray-400 items-center m-3">
                <img src="https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg" alt="transportpicture" className="w-1/2"/>
                <div className="flex flex-col justify-start items-start p-6">
                    <div className="text-2xl font-bold">Service de manutention </div>
                    <div className="text-sm">Équipe qualifiée pour charger et décharger les marchandises en toute sécurité.</div>
                    <div>
                        <Link href="/transport-marchandises">
                            <button className="bg-black text-white px-4 py-2 rounded-lg">Je souhaite une estimation</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-between bg-gray-400 items-center m-3">
                <img src="https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg" alt="transportpicture" className="w-1/2"/>
                <div className="flex flex-col justify-start items-start p-6">
                    <div className="text-2xl font-bold">Stockage temporaire </div>
                    <div className="text-sm">Solution pour les clients ayant besoin d'entreposer temporairement leurs marchandises avant la livraison finale.</div>
                    <div>
                        <Link href="/transport-marchandises">
                            <button className="bg-black text-white px-4 py-2 rounded-lg">Je souhaite une estimation</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}