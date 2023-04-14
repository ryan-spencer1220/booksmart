import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function ChatCard() {
  const [userInputArray, setUserInputArray] = useState([]);
  const [userInput, setUserInput] = useState("");

  console.log(userInput);

  return (
    <section className="max-w-full shadow-2xl rounded-3xl bg-gray h-96">
      <div className="h-10 w-full bg-lightGray rounded-t-3xl flex items-center space-x-1 ps-2">
        <div className="rounded-full bg-red w-5 h-5"></div>
        <div className="rounded-full bg-yellow w-5 h-5"></div>
        <div className="rounded-full bg-green w-5 h-5"></div>
      </div>
      <div className="grid grid-rows-2 content-between h-full px-10 pt-10 text-xl">
        <div className="py-4">
          <p className="text-white">{`>Anthony Bourdain`}</p>
          <p className="text-gold">
            <Typewriter
              words={[
                "Hello I'm Anthony Bourdain, what would you like to ask me?",
              ]}
              cursor={false}
              cursorColor="white"
            />
          </p>
          <div className="py-4">
            <p className="text-white">{`>You`}</p>
            <p className="text-aqua">
              <Typewriter
                words={["What was your inspiration for Kitchen Confidential?"]}
                cursor={false}
                cursorColor="white"
              />
            </p>
          </div>
        </div>
        <input
          type="text"
          className="bg-white p-2 rounded-2xl w-full place-self-center outline-none"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
      </div>
    </section>
  );
}
