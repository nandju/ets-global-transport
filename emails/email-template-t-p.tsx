import React from "react";

interface EmailTemplateTPProps {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  startDate: string;
  endDate: string;
  travauxTypes: string;
}

export const EmailTemplateTP: React.FC<Readonly<EmailTemplateTPProps>> = ({
  name,
  lastname,
  email,
  phone,
  startDate,
  endDate,
  travauxTypes,
}) => (
  <div>
    <table
      align="center"
      border={0}
      cellPadding="0"
      cellSpacing="0"
      className="my-[16px] h-[424px] rounded-[12px] bg-black/25"
      role="presentation"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1709086566068-3a5d99097f7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "100% 100%",
      }}
      width="100%"
    >
      <tbody>
        <tr>
          <td align="center" className="p-[40px] text-center">
            <p className="m-0 font-semibold text-white">
              Merci, mr/mme {name} {lastname}!
            </p>
            <h1 className="m-0 mt-[4px] font-bold text-white">
              Votre demande de travaux publics a été reçue avec succès
            </h1>
            <p className="m-0 mt-[8px] text-[16px] leading-[24px] text-white">
              De: {email} <br />
              Nom: {name} {lastname} <br />
              Téléphone: {phone} <br />
              Date de début: {startDate} <br />
              Date de fin: {endDate} <br />
              Type de travaux: {travauxTypes} <br />
            </p>
            <a
              href="https://react.email"
              className="mt-[24px] inline-block rounded-[8px] bg-primary px-[40px] py-[12px] font-semibold text-white no-underline"
              style={{ marginTop: "24px" }}
            >
              Reprendre
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);