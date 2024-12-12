import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

type Service = {
  picture: string;
  title: string;
  subtitle: string;
  link: string;
};

const camions: Service[] = [
  {
    picture:
      "https://i.pinimg.com/736x/c2/09/8b/c2098bbe658dd4d3ffea9133f4b6ec10.jpg",
    title: "Transport express",
    subtitle: "Livraison rapide pour produits frais ou de valeur",
    link: "#",
  },
  {
    picture:
      "https://i.pinimg.com/736x/54/1c/91/541c91db81c3a1b265064188c9f1e448.jpg",
    title: "Transport dédié",
    subtitle: "Camion réservé à un seul client pour plus de sécurité",
    link: "#",
  },
  {
    picture:
      "https://i.pinimg.com/736x/1b/c9/f8/1bc9f81dcdbf01c665801c42a5fbadd1.jpg",
    title: "Transport groupé",
    subtitle: "Partage de camion pour réduire les coûts",
    link: "#",
  },
];
export default function Solution() {
  return (
    <div className="flex flex-col justify-around bg-background p-6">
      <div className="flex flex-col justify-center gap-2">
        <div className=" text-5xl font-semibold text-center md:text-start mx-3">
          Nos Services
        </div>
        <div className="flex flex-row justify-between my-4 sm:gap-4 gap-0 lg:gap-4">
          <div className="font-bold text-xl sm:my-2 my-0 lg:my-2">
            Découvrez une gamme complète de services adaptés à vos besoins
          </div>
          <Button isDisabled color="danger" className="mt-4">
            En savoir plus {">"}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        {camions.map((camion) => {
          return (
            <Card key={camion.title}>
              <div className="relative h-52 md:h-80 w-full">
                <Image src={camion.picture} fill alt={camion.title} />
              </div>
              <CardHeader>
                <h2 className="text-xl font-bold mb-2">{camion.title}</h2>
              </CardHeader>
              <CardBody>
                <p className="text-foreground mb-4">{camion.subtitle}</p>
                <Button
                  color="primary"
                  as={Link}
                  href={camion.link}
                  className="w-full"
                >
                  En savoir plus
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
