import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <ul className="text-4xl mx-auto px-40 py-14 flex md:justify-between justify-between">
      <Link href="/">
        <li>booksmart</li>
      </Link>
      <div className="md:flex md:space-x-8 hidden md:visible">
        <Link href="/">
          <li className="hover:border-b-lightGreen hover:border-b-8 pb-2">
            About
          </li>
        </Link>
        <li className="hover:border-b-lightGreen hover:border-b-8 pb-2 hover:cursor-pointer">
          Log In
        </li>
      </div>
      <RxHamburgerMenu className="md:hidden" />
    </ul>
  );
}
