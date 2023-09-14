import { SignIn } from "@clerk/nextjs/app-beta";

const Page = async () => {
  return (
    <div className="flex justify-center">
      <SignIn />
    </div>
  );
};

export default Page;
