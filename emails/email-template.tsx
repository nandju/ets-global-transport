import React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>
      Welcome, {name}! <br /> Your Email is {email} <br /> Your message :{" "}
      {message}
    </h1>
  </div>
);
