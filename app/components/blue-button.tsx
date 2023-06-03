import React, { MouseEventHandler } from "react";

export default function BlueButton(props: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="bg-blue py-4 px-20 text-white rounded hover:bg-opacity-75 "
      onClick={props.onClick}
    >
      <p>{props.text}</p>
    </button>
  );
}
