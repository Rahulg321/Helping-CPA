import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";
import React from "react";

type RichTextComponentProps = {
  content: RichTextField;
  classname?: string;
};

const RichTextComponent = ({ content, classname }: RichTextComponentProps) => {
  return (
    <div
      className={clsx(
        "prose dark:prose-invert md:prose-lg lg:prose-xl prose-img:rounded-xl prose-a:text-blue-600",
        classname
      )}
    >
      <PrismicRichText field={content} />
    </div>
  );
};

export default RichTextComponent;
