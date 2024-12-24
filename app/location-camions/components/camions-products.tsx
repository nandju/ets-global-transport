import { Button } from "@nextui-org/react";
import Image from "next/image";
// Composant principal pour afficher le carrousel des camions
export default function CamionsProducts() {
  return(
    <div className="relative bg-gradient-to-b from-primary to-gray-100 h-[500px] flex items-center justify-center">
      <div className="absolute top-10 text-center">
        <h2 className="text-2xl font-bold">Camions-bennes</h2>
        <p className="text-sm">Transport de matériaux lourds avec bennes arrière ou latérales (jusqu&apos;à 30 tonnes)</p>
      </div>
      <Image
            alt="NextUI hero Image"
            src="/assets/images/camions-bernes-removebg-preview.png"
            width={500}
            height={500}
            className="object-contain"
      />
      <Button color="primary" className="absolute bottom-10">
        En savoir plus
      </Button>
    </div>



  );
}