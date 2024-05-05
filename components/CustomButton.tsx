import React from "react";
import { Button } from "@/components/ui/button";
import { KeyTextField } from "@prismicio/client";
import clsx from "clsx";

type CustomButtonProps = {
  btnLabel: KeyTextField | string;
  classname?: string;
};

const CustomButton = ({ btnLabel, classname }: CustomButtonProps) => {
  return <Button className={clsx("", classname)}>{btnLabel}</Button>;
};

export default CustomButton;
