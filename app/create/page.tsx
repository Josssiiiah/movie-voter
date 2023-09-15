import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import groupGenerator from "@/components/groupGenerator";
import Header from "@/components/header";

export default async function create() {
  // This page will contain behavior to join a group
  // The will enter their group code and be redirected to the group page

  return (
    <div>
      <div className="flex min-h-screen flex-col p-24">
        <Link href="/">
          <Button variant="default" className="left-10 top-10 fixed">
            Back
          </Button>
        </Link>
        <Card className=" h-[400px] w-[400px]  md:w-[600px] md:h-[600px] mx-auto my-8 flex-col space-y-12">
          <CardHeader className="text-center items-center py-12">
            <CardTitle>Create Group</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
            <Separator className="py-1 w-[175px] " />
          </CardHeader>
          <CardContent className="text-center flex flex-col space-y-12 py-12">
            <Header />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
