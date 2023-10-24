import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:py-24 space-y-8">
      {/* Desktop  */}
      <div className="hidden md:block z-10 py-10 max-w-5xl w-full text-center items-center justify-center text-5xl md:text-7xl">
        Washer App
      </div>

      <div className="hidden md:flex md:flex-col items-center justify-center md:space-y-4 py-8 w-full h-full">
        <h2 className="text-center text-2xl mb-4">Find a Laundry Room</h2>
        <div className="w-full max-w-md">
          <Input className="w-full" />
        </div>
        <div className="mt-4">
          <Link href="/join">
            <Button variant="large" size="lg" className="text-center">
              Join
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile  */}
      <div className="block md:hidden z-10 py-10 max-w-5xl w-full text-center items-center justify-center text-4xl">
        Washer App
      </div>

      <div className="flex flex-col md:hidden items-center space-y-8">
        <Link href="/join">
          <Button variant="default" size="default">
            Join
          </Button>
        </Link>
        <Link href="/create">
          <Button variant="default" size="default">
            Create
          </Button>
        </Link>
      </div>
    </main>
  );
}

{
  /* <span className="bg-gradient-to-r from-blue-500 to-slate-500 bg-clip-text text-center text-transparent">
</span> */
}
{
  /* */
}
