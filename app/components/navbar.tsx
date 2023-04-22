import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar(props: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <ul className="text-4xl flex md:justify-between justify-between">
      <Link href="/">
        <li>booksmart</li>
      </Link>
      <div className="md:flex md:space-x-8 hidden md:visible">
        <Link href="/">
          <li className="hover:border-b-lightGreen hover:border-b-8 pb-2">
            About
          </li>
        </Link>
        <li
          className="hover:border-b-lightGreen hover:border-b-8 pb-2 hover:cursor-pointer"
          onClick={() => props.setShowModal(true)}
        >
          Log In
        </li>
      </div>
      <RxHamburgerMenu className="md:hidden" />
    </ul>
  );
}
