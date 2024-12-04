import Link from "next/link";


export default function Solution(){
    return(
        <div className="flex flex-col justify-around">
            <div className="flex flex-col justify-center gap-2">
                <div>Nos Solutions</div>
                <div className="flex flex-row justify-between">
                    <div>Découvrez une gamme complète de services adaptés à vos besoins : location de camions, transport de marchandises, travaux publics, et bien plus. Avec ETS Global Transport, bénéficiez de solutions fiables, économiques et sur mesure pour simplifier votre logistique.</div>
                    <button>En savoir plus</button>
                </div>
            </div>
            <div className="flex flex-row justify-around">
                <div>Camions-bennes : Transport de matériaux lourds avec bennes arrière ou latérales (jusqu'à 30 tonnes)</div>
                <div>Camions-citernes : Transport de liquides (eau, carburant, produits chimiques) avec des citernes de 5 000 à 30 000 litres.</div>
                <div>Camions plateaux : Transport de marchandises volumineuses (10 à 40 tonnes).</div>
                <div>Camions-grues : Manutention et transport de charges lourdes avec capacité de levage jusqu'à 50 tonnes.</div>
                <div>Transport national et régional : Livraison en Côte d'Ivoire et pays voisins.</div>
                <div>Transport express : Livraison rapide pour produits frais ou de valeur.</div>
                <div>Transport dédié : Camion réservé à un seul client pour plus de sécurité.</div>
                <div>Transport groupé : Partage de camion pour réduire les coûts.</div>
                <div>Terrassement et préparation de terrain.</div>
                <div>Voirie et réseaux divers (routes, canalisations).</div>
                <div>Aménagement paysager (jardins, parcs).</div>
                <div>Démolition contrôlée.</div>
            </div>
        </div>
    )
}