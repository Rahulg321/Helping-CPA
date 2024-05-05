import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { KeyTextField, RichTextField } from "@prismicio/client";
import { IoMdStar } from "react-icons/io";
import { PrismicRichText } from "@prismicio/react";

type ActionCardProps = {
  heading: KeyTextField;
  content: RichTextField;
};

const ActionCard = ({ heading, content }: ActionCardProps) => {
  return (
    <Card className="bg-gray-100">
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose  md:prose-xl lg:prose-2xl">
          <PrismicRichText field={content} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionCard;
