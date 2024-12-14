import {Button} from "@nextui-org/react";
import { NumberTicker } from "./numberticker";

export default function Testimonial(){
    return(
        <div className="flex flex-col md:flex-row justify-around bg-red-500/10 p-20">
            <div className="flex flex-col justify-start items-start text-start gap-8">
                <div className=" text-5xl font-semibold">Nos chiffres clés</div>
                <div className="text-gray-600 text-sm">Des résultats qui témoignent de notre engagement et de notre <br /> expertise dans le secteur du transport et des travaux publics.</div>
                <Button color="primary" className="py-2 px-4">En savoir plus</Button>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center text-primary text-center bg-white scale-105 cursor-pointer rounded-lg p-8">
                    <div className="text-2xl font-semibold"><span className="text-primary">+</span> <NumberTicker value={500} /></div>
                    <div className="text-sm">projets réalisés</div>
                </div>
                <div className="flex flex-col justify-center text-primary text-center bg-white scale-105 cursor-pointer rounded-lg p-8">
                    <div className="text-2xl font-semibold"> <NumberTicker value={95} decimalPlaces={2} /> <span className="text-primary">%</span></div>
                    <div className="text-sm">de satisfaction client</div>
                </div>
                <div className="flex flex-col justify-center text-primary text-center bg-white scale-105 cursor-pointer rounded-lg p-8">
                    <div className="text-2xl font-semibold"><span className="text-primary">+</span> <NumberTicker value={100} /></div>
                    <div className="text-sm">véhicules disponibles</div>
                </div>
                <div className="flex flex-col justify-center text-primary text-center bg-white scale-105 cursor-pointer rounded-lg p-8">
                    <div className="text-2xl font-semibold"><NumberTicker value={20} /> <span className="text-primary">ans</span></div>
                    <div className="text-sm">d&apos;expérience</div>
                </div>
            </div>
        </div>
    )
}