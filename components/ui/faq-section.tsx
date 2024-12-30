"use client"
import AccordionFAQ from "./accordion";

import Link from "next/link";

export default function Faq(){
    return(
        <div className="flex flex-col justify-around px-6 py-24 bg-muted">
            <div className="flex flex-row justify-center gap-2 m-3">
                <div className="text-3xl md:text-5xl font-semibold text-center mx-3">
                    Questions Fréquemment Posées (FAQ)
                </div>
            </div>

            <div className="rounded-3xl p-6 m-3">
                <div className="max-w-2xl mx-auto">
                    <AccordionFAQ />
                    
                    <div className="text-gray-600 md:text-base text-sm text-center md:text-start">
                        Pour plus d&apos;informations sur la gestion de vos données, consultez notre{" "}
                        <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-600 underline">
                            politique de confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}