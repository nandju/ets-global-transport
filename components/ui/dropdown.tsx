import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Link} from "@nextui-org/react";

export default function DropdownUI() {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button color="primary">Souscrire</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="faded">
        <DropdownItem key="new">
            <Link href="/location-camions?form=location">
                Location de Camions
            </Link>
        </DropdownItem>
        <DropdownItem key="copy">
            <Link href="/transport-marchandises?form=transport">
                Transport de Marchandises
            </Link>
        </DropdownItem>
            <DropdownItem key="edit">
            <Link href="/travaux-publics?form=travaux">
                Travaux Publics
            </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
