import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RiLightbulbFlashLine } from "react-icons/ri";

type SolutionCardProps = {
  icon: any;
  heading: string;
  content: string;
};

const SolutionCard = ({ icon, heading, content }: SolutionCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-5xl text-mainG">{icon}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="mb-4 leading-none">{heading}</h3>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
