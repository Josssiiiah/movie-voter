"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const handleClick = async (setRandomString: any) => {
  await delay(1000); // simulate network delay
  const randomString = uuidv4();

  // Set random string in state
  setRandomString(randomString);

  // Send a POST request to the Vercel KV REST API to store the random string
  await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify(randomString),
  });
};

const GroupGenerator = () => {
  const [randomString, setRandomString] = useState("");

  return (
    <>
      <div className="items-center text-cen">
        {/* make this clickable and copy onclick  */}
        <h1 className="text-black">{randomString}</h1>
        <Button
          onClick={() => handleClick(setRandomString)}
          className="mx-auto"
        >
          Create
        </Button>
      </div>
    </>
  );
};

export default GroupGenerator;
