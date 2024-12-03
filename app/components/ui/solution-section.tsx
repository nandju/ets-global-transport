import Link from "next/link";
import { useState } from "react";
import { solution_item } from "../database/data-1";

export default function Solution(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < solution_item.length - 1;

    function handleNextClick(){
        if (hasNext){
            setIndex(index + 1);
        }
        else{
            setIndex(0);
        }
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let solution_items = solution_item[index];
    
    
    return(
        <div className="bg-white">
            <div className="flex flex-col justify-center text-center gap-3">
                <div className="font-mono text-5xl font-thin">Nos Solution</div>
                <div className="font-roboto text-lg">Découvrez une gamme complète de services adaptés à vos besoins : location de camions, transport de marchandises, travaux publics, et bien plus. Avec ETS Global Transport, bénéficiez de solutions fiables, économiques et sur mesure pour simplifier votre logistique.</div>
            </div>
            <div className="flex flex-row justify-around gap-4 bg-gray-200 p-6 rounded-3xl m-8">
                <div className="flex flex-col ">
                    <img src={solution_items.image} alt={solution_items.titleimage} />
                    <div>
                        <div>{solution_items.title}</div>
                        {showMore && <p>{solution_items.subtitle}</p> }
                    </div>
                    <button className="bg-gray-200 text-black p-2 rounded-xl hover:bg-white" onClick={handleMoreClick}>En savoir {showMore ? 'moins' : 'plus'}</button>
                </div>
                <button onClick={handleNextClick}>Suivant</button>
            </div>
        </div>
    )
}