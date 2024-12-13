import { Button } from "@nextui-org/react";
import CardUI from "./card";


export default function Services() {
  return (
    <div className="flex flex-col justify-around bg-background p-6 lg:p-20">
      <div className="flex flex-col justify-center gap-2">
        <div className=" text-5xl font-semibold text-center md:text-start mx-3">
          Nos Services
        </div>
        <div className="flex flex-row justify-between my-4 sm:gap-4 gap-0 lg:gap-4">
          <div className="font-bold text-xl sm:my-2 my-0 lg:my-2">
            Découvrez une gamme complète de services adaptés à vos besoins
          </div>
          <Button variant="bordered" color="primary" className="mt-4">
            En savoir plus {">"}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        <CardUI />
      </div>
    </div>
  );
}
