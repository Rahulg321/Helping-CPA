import { KeyTextField } from "@prismicio/client";
import clsx from "clsx";
import React from "react";

type ContactInfoCardProps = {
  cardHeading: string | KeyTextField;
  cardDescription: string | KeyTextField;
  icon: any;
  classname?: string;
};

const ContactInfoCard = ({
  cardDescription,
  cardHeading,
  icon,
  classname,
}: ContactInfoCardProps) => {
  return (
    <div
      className={clsx("text-pretty rounded-2xl  border px-6 py-6", classname)}
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="text-4xl">{icon}</div>
        <h3>{cardHeading}</h3>
      </div>
      <p>{cardDescription}</p>
    </div>
  );
};

export default ContactInfoCard;
