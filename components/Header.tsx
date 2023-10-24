"use client";

import Link from "next/link";
// import { useTheme } from "next-themes";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Moon, ShoppingCart, Sun } from "lucide-react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import UserButton from "./ClerkUserButton";

const Header = () => {
  const routes = [
    {
      href: "/",
      label: "Products",
    },
    {
      href: "/",
      label: "Categories",
    },
    {
      href: "/",
      label: "On Sale",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Movie-Voter</h1>
            </Link>
          </div>

          <div className="fixed right-10">
            <userButton />
            {/* <SignedIn>
           
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-14 h-14",
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button> Sign in</Button>
              </SignInButton>
            </SignedOut> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
