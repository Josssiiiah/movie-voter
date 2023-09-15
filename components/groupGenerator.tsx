"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const groupGenerator = () => {
  const [randomString, setRandomString] = useState("");

  const generateRandomString = () => {
    const length = 8;
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomString(result);
  };

  return (
    <>
      <div className="items-center justify-center flex">
        <h1>Group Generator</h1>
        <Button onClick={generateRandomString} className="mx-auto">
          Create
        </Button>
        <p>{randomString}</p>
      </div>
    </>
  );
};

export default groupGenerator;
