import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function join() {
  // This page will contain behavior to join a group
  // The will enter their group code and be redirected to the group page

  return (
    <div className="flex min-h-screen flex-col  p-24">
      <Link href="/">
        <Button variant="default" className="left-10 top-10 fixed">
          Back
        </Button>
      </Link>
      <Card className="w-[600px] h-[600px] mx-auto my-8 flex-col space-y-12">
        <CardHeader className="text-center">
          <CardTitle>Join Group</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="text-center">
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="text-center justify-center">
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
