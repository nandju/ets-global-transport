import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionFAQ() {
  return (
    <Accordion>
      {/* Question 1 */}
      <AccordionItem
        key="1"
        aria-label="Quels services proposez-vous ?"
        title="Quels services proposez-vous ?"
      >
        Chez ETS Global Transport, nous offrons une large gamme de services, notamment :
        <ul className="list-disc ml-6">
          <li>Location de camions adaptés à tous vos besoins.</li>
          <li>Transport de marchandises, y compris des matériaux lourds ou liquides.</li>
          <li>Travaux publics, comme le terrassement et l&apos;aménagement paysager.</li>
        </ul>
      </AccordionItem>

      {/* Question 2 */}
      <AccordionItem
        key="2"
        aria-label="Comment obtenir un devis pour mes besoins ?"
        title="Comment obtenir un devis pour mes besoins ?"
      >
        Vous pouvez obtenir un devis en utilisant notre formulaire en ligne ou en nous contactant directement par téléphone ou email. Notre équipe se fera un plaisir d&apos;évaluer vos besoins et de vous proposer une solution personnalisée.
      </AccordionItem>

      {/* Question 3 */}
      <AccordionItem
        key="3"
        aria-label="Quels types de camions proposez-vous ?"
        title="Quels types de camions proposez-vous ?"
      >
        Nous disposons de plusieurs types de camions, notamment :
        <ul className="list-disc ml-6">
          <li>Camions-bennes pour les matériaux lourds.</li>
          <li>Camions-citernes pour le transport de liquides.</li>
          <li>Camions-plateaux pour les marchandises volumineuses.</li>
          <li>Camions-grues pour la manutention de charges lourdes.</li>
        </ul>
      </AccordionItem>

      {/* Question 4 */}
      <AccordionItem
        key="4"
        aria-label="Quels sont vos horaires de disponibilité ?"
        title="Quels sont vos horaires de disponibilité ?"
      >
        Nous sommes disponibles du lundi au vendredi de 8h00 à 18h00. En cas d&apos;urgence, vous pouvez nous joindre à tout moment via notre numéro de téléphone ou par email.
      </AccordionItem>

      {/* Question 5 */}
      <AccordionItem
        key="5"
        aria-label="Comment garantissez-vous la sécurité des marchandises ?"
        title="Comment garantissez-vous la sécurité des marchandises ?"
      >
        La sécurité de vos marchandises est notre priorité. Nous utilisons des équipements modernes, des chauffeurs expérimentés et des procédures strictes pour garantir une livraison sans risque. Nous proposons également des options d&apos;assurance adaptées à vos besoins.
      </AccordionItem>
    </Accordion>
  );
}
