import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PiLightningFill } from "react-icons/pi";
import { IconType } from "react-icons";

type FeatureCardProps = {
  icon: any;
  heading: string;
  description: string;
};

const FeatureCard = ({ icon, heading, description }: FeatureCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-5xl text-mainG">
          <div className="">{icon}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className="mb-2 block text-2xl font-bold">{heading}</span>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
