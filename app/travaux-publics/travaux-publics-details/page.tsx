

import React from "react";


export default function TravauxPublicsDetails(){
    return(
        <div className="bg-green-500 w-full h-full">
            <div className="m-12 bg-gray-200 flex justify-start items-center gap-4 rounded-3xl overflow-hidden">
                <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/49/71/21/49712189530a06a196ce2c356786e6e3.jpg" alt="terrassement" />
                <div className="flex flex-col gap-4 text-start">
                    <h2 className="text-2xl font-bold font-mono">Terrassement</h2>
                    <p className="text-sm font-mono">Travaux de préparation du terrain pour les constructions, incluant le nivellement, le creusage de tranchées, et la mise en forme du terrain. Ces étapes sont essentielles pour garantir une base stable et solide pour toute construction à venir. Elles comprennent également le drainage, le déblaiement des débris, et l&apos;élimination des obstacles naturels, afin d&apos;assurer une surface uniforme prête à accueillir les fondations. Ces travaux sont réalisés avec des équipements de haute qualité et par des équipes expérimentées, assurant ainsi la durabilité et la sécurité des futures infrastructures.</p>
                </div>
            </div>
        </div>
    )
}