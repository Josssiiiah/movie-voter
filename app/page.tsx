import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:py-24 space-y-8">
      {/* Desktop  */}
      <div className="hidden md:block z-10 py-10 max-w-5xl w-full text-center items-center justify-center text-5xl md:text-7xl">
        Choose Movies with Friends
      </div>

      <div className="hidden md:block items-center md:space-x-12 py-8">
        <Link href="/join">
          <Button variant="large" size="lg">
            Join
          </Button>
        </Link>
        <Link href="/create">
          <Button variant="large" size="lg">
            Create
          </Button>
        </Link>
      </div>

      {/* Mobile  */}
      <div className="block md:hidden z-10 py-10 max-w-5xl w-full text-center items-center justify-center text-4xl">
        Choose Movies with Friends
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
