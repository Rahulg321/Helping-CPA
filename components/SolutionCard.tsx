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
    <Card className="bg-[#F1F5F9]">
      <CardHeader>
        <CardTitle className="text-5xl text-mainG">{icon}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="mb-4 leading-none">{heading}</h3>
        <span>{content}</span>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
