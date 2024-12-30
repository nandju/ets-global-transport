import Image from "next/image";
import Formulaire from "@/components/ui/formulaire";



export default function CamionsProducts1() {
  return(
    <div className="relative bg-gradient-to-t from-primary to-gray-100 h-[500px] flex items-center justify-center">
      <div className="absolute top-5 text-dark dark:text-black text-center flex flex-col gap-4">
        <div className="text-3xl">Camions-bennes</div>
        <p className="text-lg">Transport de matériaux lourds avec bennes arrière ou latérales (jusqu&apos;à 30 tonnes)</p>
      </div>
      <Image
            alt="NextUI hero Image"
            src="/assets/images/camions-bernes-removebg-preview.png"
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