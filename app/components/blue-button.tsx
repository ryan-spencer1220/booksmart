import React from "react";

export default function BlueButton(props: { text: string }) {
  return (
    <button className="bg-blue py-4 px-20 text-white rounded hover:bg-opacity-75 ">
      <p>{props.text}</p>
    </button>
  );
}
