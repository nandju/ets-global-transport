import {Card, CardFooter, Image, Button, Link} from "@nextui-org/react";

type CardService = {
    picture: string;
    title: string;
    link: string;
}

const card: CardService[] = [
    {
        picture: "https://i.pinimg.com/736x/3c/37/b2/3c37b2b1ded6edde6c3bc0904d9700cb.jpg",
        title: "Location de camions",
        link: "/location-camions",
  },
  {
    picture:"https://i.pinimg.com/736x/44/54/d1/4454d17f7904c0424846496c07b8810b.jpg",
    title:"Transport de marchandises",
    link: "/transport-marchandises",
  },
  {
    picture:"https://i.pinimg.com/736x/a9/35/22/a93522e0330055c9c879ba8388e3cc25.jpg",
    title:"Travaux publics",
    link: "/travaux-publics",
  }
];

export default function CardUI() {
    return (
      <>
        {card.map((cards) => {
          return (
            <Card isFooterBlurred className="border-none" radius="lg" key={cards.title}>
              <Image
                isZoomed
                isBlurred
                alt={cards.title}
                className="object-cover"
                height={300}
                src={cards.picture}
                width={400}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{cards.title}</p>
                <Link href={cards.link}>
                <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  En savoir plus
                </Button></Link>
              </CardFooter>
            </Card>
          );
        })}
      </>
    );
  }
  