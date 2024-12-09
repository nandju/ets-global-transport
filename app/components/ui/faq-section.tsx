"use client"

import Link from "next/link";

export default function Faq(){
    return(
        <div className="flex flex-col justify-around m-6 bg-gray-300/30">
            <div className="flex flex-row justify-center gap-2 m-3">
                <div className="font-mono text-5xl font-semibold text-center mx-3">
                    Questions Fréquemment Posées (FAQ)
                </div>
            </div>

            <div className="rounded-xl p-6 m-3">
                <div className="max-w-2xl mx-auto">
                    <div className="relative mb-4">
                        <input 
                            type="text" 
                            placeholder="Vous avez une question ? Recherchez ici pour trouver des réponses rapides"
                            className="w-full px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <button className="absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors">
                            Rechercher
                        </button>
                    </div>
                    
                    <div className="text-gray-600 text-sm text-center">
                        Pour plus d&apos;informations sur la gestion de vos données, consultez notre{" "}
                        <Link href="/" className="text-blue-500 hover:text-blue-600 underline">
                            politique de confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}