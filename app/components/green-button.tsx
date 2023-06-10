import React from "react";
import Link from "next/link";

export default function GreenButton(props: { text: string; link: string }) {
  return (
    <button className="bg-lightGreen py-4 px-20 rounded hover:bg-opacity-75 shadow-xl">
      <Link href={props.link}>{props.text}</Link>
    </button>
  );
}
