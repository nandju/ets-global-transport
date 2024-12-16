import { Button } from "@nextui-org/react";
import Link from "next/link";

type Camion = {
  picture: string;
  title: string;
  subtitle: string;
  link: string;
};

const camions: Camion[] = [
  {
    picture:
      "https://i.pinimg.com/736x/1b/c9/f8/1bc9f81dcdbf01c665801c42a5fbadd1.jpg",
    title: "Camions-bennes",
    subtitle:
      "Transport de matériaux lourds avec bennes arrière ou latérales (jusqu'à 30 tonnes)",
    link: "#",
  },
  {
    picture:
      "https://i.pinimg.com/736x/8b/48/8b/8b488b5d716ed5b40406230bc795be90.jpg",
    title: "Camions-citernes",
    subtitle:
      "Transport de liquides avec des citernes de 5 000 à 30 000 litres",
    link: "#",
  },
  {
    picture:
      "https://i.pinimg.com/736x/58/46/ab/5846ab96c2d8306fc3ffa97a1297cbd5.jpg",
    title: "Camions plateaux",
    subtitle: "Transport de marchandises volumineuses (10 à 40 tonnes)",
    link: "#",
  },
  {
    picture:
      "https://i.pinimg.com/736x/0b/2a/ee/0b2aee729838d793a0afb41ff4183537.jpg",
    title: "Camions-grues",
    subtitle:
      "Manutention et transport de charges lourdes avec capacité de levage jusqu'à 50 tonnes",
    link: "#",
  },
  {
    picture:
      "https://i.pinimg.com/736x/69/e4/68/69e468c3b656a8711a1e381a786885d8.jpg",
    title: "Transport national et régional",
    subtitle: "Livraison en Côte d'Ivoire et pays voisins",
    link: "#",
  },
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
export default function CamionsSection() {
  return (
    <div className="flex flex-col justify-around bg-muted p-6 lg:p-20">
      <div className="flex flex-col justify-center gap-2">
        <div className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center md:text-start mx-3">
          Nos Camions
        </div>
        <div className="flex flex-col md:flex-row justify-between my-4 sm:gap-4 gap-0 lg:gap-4">
          <div className="md:text-lg lg:text-xl text-center md:text-start sm:my-2 my-0 lg:my-2">
            Découvrez une gamme complète de services adaptés à vos besoins
          </div>
          <Button variant="bordered" color="primary" className="mt-4">
            En savoir plus {">"}
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-around items-stretch gap-4 flex-wrap mt-3 lg:mt-10">
        {camions.map((camion) => {
          return (
            <div
              key={camion.title} // identifier un élément de la boucle
              className="flex flex-col mt-4 self-stretch rounded-xl shadow-2xl w-72 bg-card"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  className="w-full h-40 object-cover"
                  src={camion.picture}
                  alt={camion.title}
                />
              </div>
              <div className="p-4 flex-1 flex flex-col gap-4 justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">{camion.title}</h2>
                  <p className="text-foreground">{camion.subtitle}</p>
                </div>
                <Button
                  color="primary"
                  as={Link}
                  href={camion.link}
                  className="w-full"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
