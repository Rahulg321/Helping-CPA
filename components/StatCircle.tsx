import { KeyTextField } from "@prismicio/client";
import clsx from "clsx";
import React from "react";

type StatCircleProps = {
  statNumber: KeyTextField;
  statName: KeyTextField;
  classname?: string;
};

const StatCircle = ({ statName, statNumber, classname }: StatCircleProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center bg-slate-800 py-4 text-2xl",
        classname,
      )}
    >
      <span className="text-mainG">{statNumber}</span>
      <span>{statName}</span>
    </div>
  );
};

export default StatCircle;
