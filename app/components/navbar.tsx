import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="text-4xl flex justify-between relative h-20">
      <Link href="/">
        <li>booksmart</li>
      </Link>
      <div className="flex space-x-8">
        <Link href="/">
          <li className="hover:border-b-green hover:border-b-8 pb-2">About</li>
        </Link>
        <Link href="/">
          <li className="hover:border-b-green hover:border-b-8 pb-2">Log In</li>
        </Link>
      </div>
    </ul>
  );
}
