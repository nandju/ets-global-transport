import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Input,
  Checkbox,
} from "@nextui-org/react";

export default function Formulaire() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const camionsTypes = [
    "Camion-benne",
    "Camion-citerne",
    "Camion-grue",
    "Camion-plateau",
  ];

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Faire une demande
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Formulaire de Réservation
              </DrawerHeader>
              <DrawerBody className="space-y-4">
                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Nom" placeholder="Entrez votre nom" variant="bordered" />
                  <Input
                    label="Prénom"
                    placeholder="Entrez votre prénom"
                    variant="bordered"
                  />
                </div>

                {/* Email et Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Email"
                    placeholder="Entrez votre email"
                    type="email"
                    variant="bordered"
                  />
                  <Input
                    label="Téléphone"
                    placeholder="Entrez votre téléphone"
                    type="tel"
                    variant="bordered"
                  />
                </div>

                {/* Types de Camions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Types de Camions
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {camionsTypes.map((type) => (
                      <Checkbox key={type} classNames={{ label: "text-small" }}>
                        {type}
                      </Checkbox>
                    ))}
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Date de Début"
                    placeholder="JJ/MM/AAAA"
                    type="date"
                    variant="bordered"
                  />
                  <Input
                    label="Date de Fin"
                    placeholder="JJ/MM/AAAA"
                    type="date"
                    variant="bordered"
                  />
                </div>
              </DrawerBody>

              <DrawerFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fermer
                </Button>
                <Button color="primary" onPress={onClose}>
                  Envoyer
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
