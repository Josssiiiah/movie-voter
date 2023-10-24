import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type CardInfoType = {
  title: string;
  badgeVariant:
    | "outline"
    | "default"
    | "secondary"
    | "destructive"
    | null
    | undefined;
  badgeText: string;
};

const laundryRoom = () => {
  const cardInfo: CardInfoType[] = [
    { title: "Washer 1", badgeVariant: "default", badgeText: "free" },
    {
      title: "Washer 2",
      badgeVariant: "secondary",
      badgeText: "occupied",
    },
    { title: "Washer 3", badgeVariant: "default", badgeText: "free" },
    {
      title: "Washer 4",
      badgeVariant: "secondary",
      badgeText: "occupied",
    },
  ];
  return (
    <div className="p-16 grid grid-cols-2 gap-4">
      {cardInfo.map((info, i) => (
        <Card key={i} className="p-4">
          <Badge
            variant={info.badgeVariant}
            className="relative top-0 right-0 m-2"
          >
            {info.badgeText}
          </Badge>
          <div className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl">{info.title}</CardTitle>
            </CardHeader>
            {/* <CardContent>
              <p>Card Content {i + 1}</p>
            </CardContent> */}
            {info.badgeVariant === "default" && (
              <Button variant="default" size="sm" className="text-center">
                Occupy
              </Button>
            )}
            {info.badgeVariant === "secondary" && (
              <Button variant="default" size="sm" className="text-center">
                Nudge
              </Button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default laundryRoom;
