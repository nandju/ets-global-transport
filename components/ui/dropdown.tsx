import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function DropdownUI() {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button color="primary">Souscrire</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="faded">
        <DropdownItem key="new">Location de Camions</DropdownItem>
        <DropdownItem key="copy">Transport de Marchandises</DropdownItem>
        <DropdownItem key="edit">Travaux Publics</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
