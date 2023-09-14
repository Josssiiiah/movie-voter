import { SignIn } from "@clerk/nextjs";

const Page = async () => {
  return (
    <div className="flex justify-center">
      <SignIn />
    </div>
  );
};

export default Page;
