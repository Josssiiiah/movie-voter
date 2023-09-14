import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white py-10">
      <nav className="container flex items-center text-sm font-medium tracking-wider uppercase text-stone-500">
        {/* <ul className="flex justify-center gap-8 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
