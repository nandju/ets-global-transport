import Image from "next/image";
import Formulaire from "@/components/ui/formulaire";




export default function CamionsProducts2() {
  return(
    <div className="relative bg-gradient-to-b from-primary to-gray-100 h-[500px] flex items-center justify-center">
      <div className="absolute top-5 text-white dark:text-black text-center flex flex-col gap-4">
        <div className="text-3xl">Camions-citernes</div>
        <p className="text-lg">Transport de liquides avec des citernes de 5 000 à 30 000 litres</p>
      </div>
      <Image
            alt="NextUI hero Image"
            src="/assets/images/camions-citernes-removebg-preview.png"
            width={400}
            height={400}
            className="object-contain"
      />
      <div className="absolute bottom-10">
        <Formulaire />
      </div>
    </div>



  );
}