"use client";
import { useState } from "react";
import Dashboard from "../components/dashboard";
import Sidebar from "../components/sidebar";
import BookDisplay from "../components/BookDisplay";

export default function page() {
  const [genre, setGenre] = useState<string>("Top 100");
  return (
    <div className="flex">
      <div className="flex-none">
        <Sidebar setGenre={setGenre} />
      </div>
      <div className="grow justify-start items-start py-20">
        <p className="text-4xl text-gray ps-10">{genre}</p>
        <hr className="h-px my-8 bg-gray border-0 "></hr>
        <BookDisplay />
      </div>
    </div>
  );
}
