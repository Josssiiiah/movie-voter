import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "./ui/button";

const nav = () => {
  return (
    <nav className="items-center justify-center p-5">
      <div className="flex flex-row space-x-10">
        <div className="fixed right-10">
          <SignedIn>
            {/* Mount the UserButton component */}
            {/* userButton-root */}
            {/* internal-phfxlr  */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-14 h-14",
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton>
              <Button> Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default nav;
