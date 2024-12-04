import Link from "next/link";

export default function Faq(){
    return(
        <div>
            <div>Questions Fréquemment Posées (FAQ)</div>
            <div>
                <div>
                    <div><input type="text" placeholder="Vous avez une question ? Recherchez ici pour trouver des réponses rapides"/></div>
                    <button>Rechercher</button>
                </div>
                <div>Pour plus d'informations sur la gestion de vos données, consultez notre <Link href="/">politique de confidentialité</Link></div>
            </div>
        </div>
    )
}