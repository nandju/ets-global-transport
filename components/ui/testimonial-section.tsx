import {Button} from "@nextui-org/react";

export default function Testimonial(){
    return(
        <div className="flex flex-row justify-between bg-gray-200 p-6">
            <div className="flex flex-col justify-start items-start text-start gap-8">
                <div className="font-mono text-5xl font-semibold">Nos chiffres clés</div>
                <div className="text-gray-600 text-sm">Des résultats qui témoignent de notre engagement et de notre expertise dans le secteur du transport et des travaux publics.</div>
                <Button color="primary" className="py-2 px-4">En savoir plus</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-center text-center bg-white hover:bg-black hover:text-white rounded-lg p-4">
                    <div className="text-2xl font-mono font-semibold"><span className="text-blue-500">+</span> 500</div>
                    <div className="text-sm">projets réalisés</div>
                </div>
                <div className="flex flex-col justify-center text-center bg-white hover:bg-black hover:text-white rounded-lg p-4">
                    <div className="text-2xl font-mono font-semibold">95 <span className="text-blue-500">%</span></div>
                    <div className="text-sm">de satisfaction client</div>
                </div>
                <div className="flex flex-col justify-center text-center bg-white hover:bg-black hover:text-white rounded-lg p-4">
                    <div className="text-2xl font-mono font-semibold"><span className="text-blue-500">+</span> 100</div>
                    <div className="text-sm">véhicules disponibles</div>
                </div>
                <div className="flex flex-col justify-center text-center bg-white hover:bg-black hover:text-white rounded-lg p-4">
                    <div className="text-2xl font-mono font-semibold">20 <span className="text-blue-500">ans</span></div>
                    <div className="text-sm">d&apos;expérience</div>
                </div>
            </div>
        </div>
    )
}