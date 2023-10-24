import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

function Content() {
  return (
    <div>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  );
}

export default function ClerkUserButton({
  pageProps,
}: {
  pageProps: any;
}) {
  return (
    <ClerkProvider {...pageProps}>
      <Content />
    </ClerkProvider>
  );
}
