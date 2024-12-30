import Image from "next/image";
import Formulaire from "@/components/ui/formulaire";




export default function CamionsProducts3() {
  return(
    <div className="relative bg-gradient-to-t from-primary to-gray-100 h-[500px] flex items-center justify-center">
      <div className="absolute top-5 text-dark dark:text-black text-center flex flex-col gap-4">
        <div className="text-3xl">Camions plateaux</div>
        <p className="text-lg">Transport de marchandises volumineuses (10 à 40 tonnes)</p>
      </div>
      <Image
            alt="NextUI hero Image"
            src="/assets/images/camions-plateaux-removebg-preview.png"
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