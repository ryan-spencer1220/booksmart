import React, { useEffect, useState, KeyboardEvent } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function ChatCard() {
  const [userInputArray, setUserInputArray] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const pushInputToArray = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      setUserInputArray([...userInputArray, userInput]);
      setUserInput("");
      console.log(userInputArray);
    }
  };

  useEffect(() => {
    // console.log(userInput);
  }, [userInput]);

  return (
    <section className="max-w-full shadow-2xl rounded-3xl bg-gray aspect-video">
      <div className="h-10 w-full bg-lightGray rounded-t-3xl flex items-center space-x-1 ps-2">
        <div className="rounded-full bg-red w-5 h-5"></div>
        <div className="rounded-full bg-yellow w-5 h-5"></div>
        <div className="rounded-full bg-green w-5 h-5"></div>
      </div>
      <div className="flex items-end content-between h-full px-10 pt-10 text-xl relative">
        <div className="py-4 absolute bottom-24">
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
          {userInputArray.map((text) => (
            <div className="pt-4" key={text}>
              <p className="text-white">{`>You`}</p>
              <p className="text-aqua">{text}</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          className="bg-white p-2 rounded-2xl outline-none mb-8 mx-8 absolute bottom-0 w-11/12 right-2"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => pushInputToArray(e)}
        ></input>
      </div>
    </section>
  );
}
