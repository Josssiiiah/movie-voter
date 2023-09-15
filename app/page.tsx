import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 py-10 max-w-5xl w-full text-center items-center justify-center text-6xl md:text-7xl lg:flex">
        Decide What to Watch <br /> with Friends
      </div>
      <div className="py-8 space-x-24">
        <Link href="/join">
          <Button variant="default" size="lg">
            Join
          </Button>
        </Link>
        <Link href="/create">
          <Button variant="default" size="lg">
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
